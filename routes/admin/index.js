const express = require('express')
const router = express.Router()

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
  next()
})

router.use('/users', require('./users'))

module.exports = router
