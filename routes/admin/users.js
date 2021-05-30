const express = require('express')
const router = express.Router()
const authJwt = require('../../middlewares/user/authJwt')
const {getUser } = require('../../middlewares/admin/user')
const controller = require('../../controllers/admin/users')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
  next()
})

const isAdminMiddleware = [authJwt.verifyToken, authJwt.isAdmin]
const getUserMiddleware = [authJwt.verifyToken, authJwt.isAdmin, getUser]

router.get('/', isAdminMiddleware, controller.allUsers)
router.get('/:id', getUserMiddleware, controller.getUser)

module.exports = router
