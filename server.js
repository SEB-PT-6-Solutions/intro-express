/* eslint-disable prefer-destructuring */
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Middleware
app.use(morgan('dev'));

// First middleware function
app.use((req, res, next) => {
  console.log('Middleware 1: Logging request details');
  next(); // Pass control to the next middleware
});

// Second middleware function
app.use((req, res, next) => {
  console.log('Middleware 2: Performing some operation');
  next(); // Pass control to the next middleware
});

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

app.get('/home/hi/yay', (req, res) => {
  res.send('<h1>Hello Home!</h1>');
});

app.get('/shoes/hello', (req, res) => {
  res.send('<h1>Hello!</h1>');
});

app.get('/shoes/:shoeType', (req, res) => {
  res.send(`<h1>the shoe type is ${req.params.shoeType}</h1>`);
});

app.get('/hello', (req, res) => {
  // Accessing query parameters from the request
  const name = req.query.name;
  const age = req.query.age;

  // Using the query parameters to customize the response
  res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
