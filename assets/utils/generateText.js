let randomParagraph = require('random-paragraph');

function generateText() {
  return randomParagraph({ sentences: 15 });
}

module.exports = { generateText };
