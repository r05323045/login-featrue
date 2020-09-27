// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')

router.use('/', home)
router.use('/login', login)
// 準備引入路由模組
// 匯出路由器
module.exports = router
