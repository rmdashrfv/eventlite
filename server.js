const express = require('express')
const app = express()
const morgan = require('morgan')
const host = '127.0.0.1'
const port = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Eventlite</h1>')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login</h1>')
})

app.get('/signup', (req, res) => {
  res.send('<h1>Signup</h1>')
})

app.get('/events/all', (req, res) => {
  res.send('<h1>All Events</h1>')
})

app.get('/events/create', (req, res) => {
  res.send('<h1>Create a new event</h1>')
})

app.listen(port, () => {
  console.log('Running on', host, port)
})