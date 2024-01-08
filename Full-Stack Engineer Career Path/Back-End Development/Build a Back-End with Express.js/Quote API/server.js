const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT);

app.get('/api/quotes', (req, res, next) => {
  let response = {
    quotes: []
  }

  if (!req.query.person) {
    response.quotes = quotes;
  } else {
    const filteredQuotes = quotes.filter(quote => quote.person === req.query.person);

    if (filteredQuotes.length > 0) {
      response.quotes = filteredQuotes;
    }
  }
  res.send(response);
});

app.get('/api/quotes/random', (req, res, next) => {
  const response = {
    quote: getRandomElement(quotes)
  }

  res.send(response);
});

app.post('/api/quotes', (req, res, next) => {
  const newQuote = {
    quote: req.query.quote,
    person: req.query.person
  }

  if (newQuote.quote && newQuote.person) {
    quotes.push(newQuote);
    res.status(201).send({quote: newQuote});
  } else {
    res.status(400).send()
  }
})