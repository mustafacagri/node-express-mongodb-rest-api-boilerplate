const express = require('express')
const router = express.Router()
const controller = require('../controllers/posts')
const getPost = require('../middlewares/posts/getPost')
const authJwt = require('../middlewares/user/authJwt')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
  next()
})

router.get('/', controller.allPosts).post('/', controller.createPost)
router
  .get('/:id', getPost, controller.singlePost)
  .put('/:id', [authJwt.verifyToken, authJwt.isAdmin, getPost], controller.updatePost)
  .delete('/:id', [authJwt.verifyToken, authJwt.isAdmin, getPost], controller.deletePost)

module.exports = router
