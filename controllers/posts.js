const { response, request, dbc } = require('../classes')
const Post = require('../models/post')
const slug = require('slug')

exports.allPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(new response.success(posts))
  } catch (err) {
    res.status(500).json(new response.fail(err.message))
  }
}

exports.singlePost = async (req, res) => {
  try {
    res.json(response.dynamic(['_id', 'url', 'title', 'description'], res.post))
  } catch {
    res.status(500).json(new response.fail(err.message))
  }
}

exports.createPost = async (req, res) => {
  try {
    let data = request(['title', 'description'], req.body)
    data.url = await dbc.UrlGenerator(slug(req.body.title), 'post')
    const post = new Post(data)
    const newPost = await post.save()
    res.status(201).json(new response.success(newPost))
  } catch (err) {
    res.status(400).json(new response.fail(err.message))
  }
}

exports.updatePost = async (req, res) => {
  try {
    if (req.body.url) {
      res.post.url = await dbc.UrlGenerator(slug(req.body.url), 'post')
    }
    if (req.body.title) {
      res.post.title = req.body.title
    }
    if (req.body.description) {
      res.post.description = req.body.description
    }
    const updatedPost = await res.post.save()
    res.json(new response.success(updatedPost))
  } catch (err) {
    res.json(new response.fail(err.message))
  }
}

exports.deletePost = async (req, res) => {
  try {
    await res.post.remove()
    res.json(new response.success(null, 'Post deleted'))
  } catch (err) {
    return res.status(500).json(new response.fail(err.message))
  }
}
