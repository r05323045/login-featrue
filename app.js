// 載入 express 並建構應用程式伺服器
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

// 引用路由器
const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
