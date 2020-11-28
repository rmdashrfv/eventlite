const express = require('express')
const router = express.Router()

router.get('/events/all', (req, res) => {
  res.render('events/all')
})

router.get('/events/new', (req, res) => {
  res.render('events/new')
})

module.exports = router