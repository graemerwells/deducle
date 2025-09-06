// In file: get-daily-puzzle.js

const { getTodaysPuzzle } = require('./puzzle-logic.js');

exports.handler = async function(event, context) {
  const dailyPuzzle = getTodaysPuzzle();

  return {
      statusCode: 200,
      body: JSON.stringify(dailyPuzzle)
  };
};