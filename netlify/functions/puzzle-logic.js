// In file: puzzle-logic.js

const { PUZZLES_JSON } = require('./puzzles.js');
const { zonedTimeToUtc, format } = require('date-fns-tz');
const { differenceInCalendarDays } = require('date-fns');

function getTodaysPuzzle() {
  const timeZone = 'Europe/Zurich';
  const now = new Date();
  
  // Get the current time interpreted as if it's in the Zurich timezone
  const nowInZurich = zonedTimeToUtc(now, timeZone);
  
  // The epoch date must also be interpreted in the same timezone for an accurate comparison
  const epochDate = zonedTimeToUtc(new Date('2024-01-01'), timeZone);

  // Calculate the difference in calendar days, not milliseconds
  const daysSinceEpoch = differenceInCalendarDays(nowInZurich, epochDate);
  const puzzleIndex = daysSinceEpoch % PUZZLES_JSON.length;
  
  return PUZZLES_JSON[puzzleIndex];
}

module.exports = { getTodaysPuzzle };