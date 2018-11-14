const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('views', (__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  console.log(req)
})

app.get('/users/:username/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(3000, () => console.log('I hear you'))