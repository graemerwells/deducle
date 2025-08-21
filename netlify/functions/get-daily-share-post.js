// In file: /netlify/functions/get-daily-share-post.js

// --- 1. IMPORT YOUR PUZZLE LOGIC ---
// This line assumes your puzzle logic is in a file named 'puzzle-logic.js'
// in the same directory and it exports a function called 'getTodaysPuzzle'.
// Please adjust the path and function name to match your project structure.
const { getTodaysPuzzle } = require('./get-daily-puzzle.js
');


// This utility function generates the colored squares pattern.
function generatePattern(guess, target) {
    if (!guess || !target) return 'BBBBB';
    const pattern = Array(5).fill('B');
    const targetLetters = target.split('');
    const guessLetters = guess.split('');

    // First pass for greens (G)
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            pattern[i] = 'G';
            targetLetters[i] = null;
            guessLetters[i] = null;
        }
    }
    // Second pass for yellows (Y)
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


// This is the main function that Netlify will run on a schedule.
exports.handler = async function(event) {
    
    // Get your secret Make.com Webhook URL from Netlify's environment variables.
    const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;
    if (!MAKE_WEBHOOK_URL) {
        console.error("Make Webhook URL not configured in environment variables.");
        return { 
            statusCode: 500, 
            body: "Server configuration error: Make Webhook URL not set." 
        };
    }

    // Generate the post content using your imported puzzle function.
    const todaysPuzzle = getTodaysPuzzle(); 
    const pattern = generatePattern(todaysPuzzle.guessWord, todaysPuzzle.finalWord);
    const emojiPattern = pattern.replace(/G/g, '🟩').replace(/Y/g, '🟨').replace(/B/g, '⬛');
    
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Replace "your-domain.com" with your actual website domain.
    const postText = `La Quinta Prova - ${formattedDate}\n\nHere is today's pattern to solve!\n\n${emojiPattern}\n\nPlay here: https://5thguess.netlify.app`;

    // Send the generated text to your Make.com Webhook.
    try {
        await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ post: postText }),
        });
        
        // This response is for logging purposes in your Netlify account.
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