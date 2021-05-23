const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const { response, request, db } = require('../classes')
const slug = require('slug')

// Retrieve all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(new response.success(posts))
  } catch (err) {
    res.status(500).json(new response.fail(err.message))
  }
})

// Retrieve a single post
router.get('/:id', getPost, async (req, res, next) => {
  res.json(response.dynamic(['_id', 'url', 'title', 'description'], res.post))
})

// Create a post
router.post('/', async (req, res) => {
  let data = request(['title', 'description'], req.body)
  data.url = await db.UrlGenerator(slug(req.body.title),'post')
  console.log("data.url: " + data.url)
  // const found = Post.find({url: data.url})
  const found = Post.find({url: data.url})
  const post = new Post(data)
  try {
    const newPost = await post.save()
    res.status(201).json(new response.success(newPost))
  } catch (err) {
    res.status(400).json(new response.fail(err.message))
  }
})

// Update a post
router.put('/:id', getPost, async (req, res) => {
  if(req.body.url){
    res.post.url = await db.UrlGenerator(slug(req.body.url),'post')
  }
  if(req.body.title){
    res.post.title = req.body.title
  }
  if(req.body.description){
    res.post.description = req.body.description
  }
  try {
    const updatedPost = await res.post.save()
    res.json(new response.success(updatedPost))
  } catch (err) {
    res.json(new response.fail(err.message))
  }
})

// Delete a post
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.post.remove()
    res.json(new response.success(null, 'Post deleted'))
  } catch (err) {
    return res.status(500).json(new response.fail(err.message))
  }
})

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

module.exports = router
