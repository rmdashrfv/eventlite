const express = require('express')
const router = express.Router()

router.get('/events/all', (req, res) => {
  res.send('<h1>All Events</h1>')
})

router.get('/events/new', (req, res) => {
  res.send('events/new')
})

module.exports = router