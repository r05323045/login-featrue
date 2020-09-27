// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Login = require('../../models/login')
// 定義首頁路由
router.get('/', (req, res) => {
  Login.find()
    .lean()
    .then(res.render('index'))
    .catch(error => console.error(error))
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  return Login.find()
    .then(users => {
      users.forEach(user => {
        if (user.email === email && user.password === password) {
          res.redirect('/welcome')
        }
      })
      res.redirect('/error')
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
