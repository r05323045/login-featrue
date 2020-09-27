// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 定義首頁路由

router.get('/', (req, res) => {
  if (req.cookies.username) {
    const name = req.cookies.username
    res.render('welcome', { name })
  } else {
    res.redirect('/login')
  }
})

router.post('/signout', (req, res) => {
  res.cookie('username', '', { maxAge: 0 })
  res.redirect('/login')
})

// 匯出路由模組
module.exports = router
