const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.post('/', (req, res) => {
  const { name, email, password } = req.body
  return Login.find()
    .then(users => {
      users.forEach(user => {
        if (user.email === email && user.password === password) {
          res.redirect('/welcome', name)
        } else {
          const error = true
          const errorMessage = 'Email 或Password 錯誤'
          res.redirect('/', error, errorMessage)
        }
      })
    })
    .catch(error => console.log(error))
})
