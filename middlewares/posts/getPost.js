const Post = require('../../models/post')
const { response } = require('../../classes')


async function getPost(req, res, next) {
  let post
  try {
    post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json(new response.fail('Can not find the post'))
    }
  } catch (err) {
    next(new response.fail())
  }
  res.post = post
  next()
}

module.exports = getPost