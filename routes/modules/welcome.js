const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  Login.find()
    .lean()
    .then(res.render('welcome'))
    .catch(error => console.error(error))
})

module.exports = router
