// This function reads your secret puzzle list and returns only one puzzle per day.

const { PUZZLES_JSON } = require('./puzzles.js');

exports.handler = async function(event, context) {
    // Daily Puzzle Logic
    const epochDate = new Date('2024-01-01');
    const now = new Date();
    const msSinceEpoch = now - epochDate;
    const daysSinceEpoch = Math.floor(msSinceEpoch / (1000 * 60 * 60 * 24));
    const puzzleIndex = daysSinceEpoch % PUZZLES_JSON.length;
    
    const dailyPuzzle = PUZZLES_JSON[puzzleIndex];

    // Send the single daily puzzle back to the game.
    return {
        statusCode: 200,
        body: JSON.stringify(dailyPuzzle)
    };
};
