// In file: /netlify/functions/get-daily-share-post.js

// --- TEMPORARY TEST CODE ---
// We are NOT importing your puzzle logic for this test.

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
        return { statusCode: 500, body: "Make Webhook URL not set." };
    }

    // --- Using a hardcoded puzzle for the test ---
    const todaysPuzzle = {
        guessWord: "TESTO",
        finalWord: "PROVA"
    };
    
    const pattern = generatePattern(todaysPuzzle.guessWord, todaysPuzzle.finalWord);
    const emojiPattern = pattern.replace(/G/g, '🟩').replace(/Y/g, '🟨').replace(/B/g, '⬛');
    
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const postText = `La Quinta Prova - ${formattedDate}\n\nHere is today's pattern to solve!\n\n${emojiPattern}\n\nPlay here: https://your-domain.com`;

    try {
        await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ post: postText }),
        });
        
        return {
            statusCode: 200,
            body: "Successfully sent TEST data to Make.com.",
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: "Failed to send data to Make.com.",
        };
    }
};
