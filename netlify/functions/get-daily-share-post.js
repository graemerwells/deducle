// In file: /netlify/functions/get-daily-share-post.js

// This function now contains its own logic to get the daily puzzle.
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
        console.error("Make Webhook URL not configured in environment variables.");
        return { 
            statusCode: 500, 
            body: "Server configuration error: Make Webhook URL not set." 
        };
    }

    // --- Puzzle logic is now directly inside this function ---
    const epochDate = new Date('2024-01-01');
    const now = new Date();
    const msSinceEpoch = now - epochDate;
    const daysSinceEpoch = Math.floor(msSinceEpoch / (1000 * 60 * 60 * 24));
    const puzzleIndex = daysSinceEpoch % PUZZLES_JSON.length;
    const todaysPuzzle = PUZZLES_JSON[puzzleIndex];
    
    const pattern = generatePattern(todaysPuzzle.guessWord, todaysPuzzle.finalWord);
    const emojiPattern = pattern.replace(/G/g, '🟩').replace(/Y/g, '🟨').replace(/B/g, '⬛');
    
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Replace "your-domain.com" with your actual website domain.
    const postText = `5th Guess! - ${formattedDate}\n\nHere is today's pattern to solve!\n\n${emojiPattern}\n\nPlay here: https://5thguess.netlify.app\n #Wordle #WordleSky #5thGuess`;

    try {
        await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ post: postText }),
        });
        
        return {
            statusCode: 200,
            body: "Successfully sent data to Make.com.",
        };
    } catch (error) {
        console.error("Error sending data to Make.com:", error);
        return {
            statusCode: 500,
            body: "Failed to send data to Make.com.",
        };
    }
};
