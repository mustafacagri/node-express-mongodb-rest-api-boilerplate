const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdTime: {
    type: Date,
    required: true,
    default: +new Date()
  }
})

module.exports = mongoose.model('Post', postSchema)




// const mongoose = require('mongoose')

// const Post = mongoose.model(
//   'Post',
//   new mongoose.Schema({  url: {
//     type: String,
//     required: true
//   },
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   createdTime: {
//     type: Date,
//     required: true,
//     default: +new Date()
//   }
//   })
// )

// module.exports = Post
