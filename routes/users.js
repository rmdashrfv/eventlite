const express = require('express') // instantiate express
const { User } = require('../models')
const router = express.Router() // create a router object
const bodyParser = require('body-parser')
router.use(bodyParser.json()) 

router.get('/login', (req, res) => {
  res.send('<h1>Login</h1>')
})

router.get('/users/new', (req, res) => {
  res.render('users/new')
})

router.post('/users/new', async (req, res) => {
  console.log(req.body)
  let email = req.body.email
  let password = req.body.password
  let user = User.build({email: email, password: password})
  await user.save()
  res.status(200).json({email: email})
  // need to handle errors as well
})

router.get('/users/account/:id', async (req, res) => {
  let user = await User.findOne({where: {id: req.params.id}})
  res.render('users/account', {user: user})
})

router.get('/users/all', async (req, res) => {
  let allUsers = User.findAll()
  res.render('users/all', {allUsers: allUsers})
})

module.exports = router