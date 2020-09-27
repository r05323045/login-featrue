// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Login = require('../../models/login')
// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  return Login.find()
    .then(users => {
      let error = true
      users.forEach(user => {
        if (user.email === email && user.password === password) {
          error = false
          res.redirect(`/welcome/${user.firstName}`)
        }
      })
      if (error) {
        res.redirect('/error')
      }
    })
    .catch(error => console.log(error))
})

router.get('/error', (req, res) => {
  const error = true
  const errorMessage = 'Email 或 Password 錯誤'
  res.render('index', { error, errorMessage })
})
// 匯出路由模組
module.exports = router
