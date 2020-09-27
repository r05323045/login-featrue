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
// 匯出路由模組
module.exports = router
