// This function checks a guessed word against your secret word list.

const { WORD_LIST } = require('./wordlist.js');

exports.handler = async function(event, context) {
    try {
        const { word } = JSON.parse(event.body);
        const isValid = WORD_LIST.includes(word);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ isValid: isValid })
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid request" })
        };
    }
};
