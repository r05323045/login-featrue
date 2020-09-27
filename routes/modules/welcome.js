const express = require('express')
const router = express.Router()

router.get('/:name', (req, res) => {
  const name = req.params.name
  res.render('welcome', { name })
})

module.exports = router
