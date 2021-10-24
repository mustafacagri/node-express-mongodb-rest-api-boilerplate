const mongoose = require('mongoose')

const postTypes = mongose.model(
  'postTypes',
  new mongose.Schema({
    name: String,
    metadata: {
      slug: String,
      title: {
        type: String,
        maxLength: 100
      },
      titleSuffix: {
        type: Boolen,
        default: true
      },
      slug: String,
      description: {
        type: String,
        maxLength: 300
      },
      canonical: String,
      tweet: String
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    date: Date,
    status: {
      isActive: {
        type: Boolen,
        default: true
      },
      isDeleted: {
        type: Boolen,
        default: false
      }
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
      }
    ],
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Images'
      }
    ]
  })
)
