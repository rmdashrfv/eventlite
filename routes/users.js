const express = require('express') // instantiate express
const router = express.Router() // create a router object

router.get('/login', (req, res) => {
  res.send('<h1>Login</h1>')
})

router.get('/users/new', (req, res) => {
  res.render('users/new')
})

router.get('/users/account', (req, res) => {
  res.send('<h1>Account settings</h1>')
})

module.exports = router