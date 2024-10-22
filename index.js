const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var LoremIpsum = require('lorem-ipsum').LoremIpsum;

var lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
console.log('here');

app.get('/', (req, res) => res.send(lorem.generateParagraphs(process.env.JOC_PARAGRAPHS)))

app.listen(port, () => console.log(`Example app listening on port ${port}! paragraphs: ${process.env.JOC_PARAGRAPHS}`))
