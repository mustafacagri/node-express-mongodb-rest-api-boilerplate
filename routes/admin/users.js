const express = require('express')
const router = express.Router()
const { getUser } = require('../../middlewares/admin/user')
const controller = require('../../controllers/admin/users')
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('../../middlewares/user/verifySignUp')

const createUserMiddleware = [getUser, checkDuplicateUsernameOrEmail, checkRolesExisted]

router.get('/', controller.allUsers).post('/', createUserMiddleware, controller.createUser)
router
  .get('/:id', getUser, controller.getUser)
  .put('/:id', getUser, controller.updateUser)
  .delete('/:id', getUser, controller.deleteUser)

module.exports = router
