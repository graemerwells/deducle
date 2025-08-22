// In file: /netlify/functions/get-daily-share-post.js

const { PUZZLES_JSON } = require('./puzzles.js');

function generatePattern(guess, target) {
    if (!guess || !target) return 'BBBBB';
    const pattern = Array(5).fill('B');
    const targetLetters = target.split('');
    const guessLetters = guess.split('');

    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            pattern[i] = 'G';
            targetLetters[i] = null;
            guessLetters[i] = null;
        }
    }
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] !== null) {
            const yellowIndex = targetLetters.indexOf(guessLetters[i]);
            if (yellowIndex !== -1) {
                pattern[i] = 'Y';
                targetLetters[yellowIndex] = null;
            }
        }
    }
    return pattern.join('');
}

exports.handler = async function(event) {
    const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;
    if (!MAKE_WEBHOOK_URL) {
        return { statusCode: 500, body: "Webhook URL not set." };
    }

    // --- Puzzle logic is directly inside this function ---
    const epochDate = new Date('2024-01-01');
    const now = new Date();
    const msSinceEpoch = now - epochDate;
    const daysSinceEpoch = Math.floor(msSinceEpoch / (1000 * 60 * 60 * 24));
    const puzzleIndex = daysSinceEpoch % PUZZLES_JSON.length;
    const todaysPuzzle = PUZZLES_JSON[puzzleIndex];
    
    const pattern = generatePattern(todaysPuzzle.guessWord, todaysPuzzle.finalWord);
    const emojiPattern = pattern.replace(/G/g, '🟩').replace(/Y/g, '🟨').replace(/B/g, '⬛');
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    
    // --- Rich Text Generation for Bluesky ---
    const websiteUrl = "https://5thguess.netlify.app"; // Replace with your actual domain
    const hashtag1 = "#5thGuess";
    const hashtag2 = "#Puzzle";
    const hashtag3 = "#WordGame";
    const hashtag4 = "#Wordle";

    const postText = `5th Guess - ${formattedDate}\n\n${emojiPattern}\n\nPlay here: ${websiteUrl} ${hashtag1} ${hashtag2} ${hashtag3} ${hashtag4}`;

    const textEncoder = new TextEncoder();
    const linkStart = textEncoder.encode(postText.substring(0, postText.indexOf(websiteUrl))).length;
    const linkEnd = linkStart + textEncoder.encode(websiteUrl).length;
    const tag1Start = textEncoder.encode(postText.substring(0, postText.indexOf(hashtag1))).length;
    const tag1End = tag1Start + textEncoder.encode(hashtag1).length;
    const tag2Start = textEncoder.encode(postText.substring(0, postText.indexOf(hashtag2))).length;
    const tag2End = tag2Start + textEncoder.encode(hashtag2).length;

    // Create the rich text object for your automation service
    const richTextPayload = {
        text: postText,
        facets: [
            {
                index: { byteStart: linkStart, byteEnd: linkEnd },
                features: [{ $type: 'app.bsky.richtext.facet#link', uri: websiteUrl }]
            },
            {
                index: { byteStart: tag1Start, byteEnd: tag1End },
                features: [{ $type: 'app.bsky.richtext.facet#tag', tag: hashtag1.substring(1) }]
            },
            {
                index: { byteStart: tag2Start, byteEnd: tag2End },
                features: [{ $type: 'app.bsky.richtext.facet#tag', tag: hashtag2.substring(1) }]
            }
        ]
    };

    try {
        await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(richTextPayload),
        });
        
        return { statusCode: 200, body: "Successfully sent rich text data." };
    } catch (error) {
        console.error("Error sending data:", error);
        return { statusCode: 500, body: "Failed to send data." };
    }
};
