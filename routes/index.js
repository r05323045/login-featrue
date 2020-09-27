// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const login = require('./modules/login')
const welcome = require('./modules/welcome')
// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組
router.use('/welcome', welcome)
router.use('/', login)
// 準備引入路由模組
// 匯出路由器
module.exports = router
