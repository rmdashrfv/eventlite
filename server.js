const express = require('express')
const app = express()
const morgan = require('morgan')
const host = '127.0.0.1'
const port = 3000
const bodyParser = require('body-parser')
const { Liquid } = require('liquidjs')
const engine = new Liquid({
  root: ['.', './views/layouts'], // where the engine will look for .liquid files
  extname: '.liquid' // now we don't have to write .liquid on every file
})
const users = require('./routes/users')
const events = require('./routes/events')
app.engine('liquid', engine.express())
app.use(bodyParser.urlencoded({ extended: true })) // to handle form parsing
app.set('views', './views') // set the directory where app will look for html/view files
app.set('view engine', 'liquid') // set the view engine

app.use(morgan('dev')) // server logging
app.use(users)
app.use(events)

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.listen(port, () => {
  console.log('Running on', host, port)
})