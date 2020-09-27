const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  if (req.cookies.username) {
    res.redirect('../')
  } else if (req.cookies.error) {
    const error = true
    const errorMessage = 'Email 或 Password 錯誤'
    res.render('index', { error, errorMessage })
  } else {
    res.render('index')
  }
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  return Login.find()
    .then(users => {
      let error = true
      users.forEach(user => {
        if (user.email === email && user.password === password) {
          error = false
          res.cookie('username', `${user.firstName}`)
          res.redirect('../')
        }
      })
      if (error) {
        res.cookie('error', `${Date.now()}`, { maxAge: 2 * 1000 })
        res.redirect('/login')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
