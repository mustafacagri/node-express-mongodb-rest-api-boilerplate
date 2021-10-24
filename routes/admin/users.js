const express = require('express')
const router = express.Router()
const { getUser } = require('../../middlewares/admin/user')
const controller = require('../../controllers/admin/users')
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('../../middlewares/user/verifySignUp')
const dbQuery = require('../../middlewares/utils/dbQuery')
const User = require('../../models/user')

const createUserMiddleware = [getUser, checkDuplicateUsernameOrEmail, checkRolesExisted]

router
  .route('/')
  .get(dbQuery(User, { path: 'role', select: 'mail password' }), controller.allUsers)
  .post(createUserMiddleware, controller.createUser)
router
  .get('/:id', getUser, controller.getUser)
  .put('/:id', getUser, controller.updateUser)
  .delete('/:id', getUser, controller.deleteUser)

module.exports = router
