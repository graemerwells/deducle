// In file: /netlify/functions/get-daily-share-post.js

const { getTodaysPuzzle } = require('./get-daily-puzzle.js');

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
    const AUTOMATION_WEBHOOK_URL = process.env.AUTOMATION_WEBHOOK_URL; // Use a generic name like AUTOMATION_WEBHOOK_URL
    if (!AUTOMATION_WEBHOOK_URL) {
        return { statusCode: 500, body: "Webhook URL not set." };
    }

    const todaysPuzzle = getTodaysPuzzle();
    const pattern = generatePattern(todaysPuzzle.guessWord, todaysPuzzle.finalWord);
    const emojiPattern = pattern.replace(/G/g, '🟩').replace(/Y/g, '🟨').replace(/B/g, '⬛');
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    
    // --- Rich Text Generation for Bluesky ---
    const websiteUrl = "https://your-domain.com"; // Replace with your actual domain
    const hashtag1 = "#WordPuzzle";
    const hashtag2 = "#LaQuintaProva";

    const postText = `La Quinta Prova - ${formattedDate}\n\n${emojiPattern}\n\nPlay here: ${websiteUrl} ${hashtag1} ${hashtag2}`;

    const textEncoder = new TextEncoder();
    const linkStart = textEncoder.encode(postText.substring(0, postText.indexOf(websiteUrl))).length;
    const linkEnd = linkStart + textEncoder.encode(websiteUrl).length;
    const tag1Start = textEncoder.encode(postText.substring(0, postText.indexOf(hashtag1))).length;
    const tag1End = tag1Start + textEncoder.encode(hashtag1).length;
    const tag2Start = textEncoder.encode(postText.substring(0, postText.indexOf(hashtag2))).length;
    const tag2End = tag2Start + textEncoder.encode(hashtag2).length;

    // Create the rich text object for Make
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
        await fetch(AUTOMATION_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(richTextPayload),
        });
        
        return { statusCode: 200, body: "Successfully sent rich text data." };
    } catch (error) {
        return { statusCode: 500, body: "Failed to send data." };
    }
};
