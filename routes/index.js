const express = require('express')
const router = express.Router()

router.use('/admin', require('./admin'))

router.use('/auth', require('./auth'))
router.use('/user', require('./user'))
router.use('/posts', require('./posts'))

module.exports = router
