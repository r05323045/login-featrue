// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const login = require('./modules/login')
const welcome = require('./modules/welcome')

router.use('/', login)
router.use('/welcome', welcome)
// 準備引入路由模組
// 匯出路由器
module.exports = router
