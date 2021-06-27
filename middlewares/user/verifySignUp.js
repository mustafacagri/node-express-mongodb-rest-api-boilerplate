const { response } = require('../../classes')
const ROLES = require('../../models/role')
const User = require('../../models/user')

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  console.log('req.body')
  console.log(req.body)
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    if (user) {
      res.status(400).send({ message: 'Failed! Username is already in use!' })
      return
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err })
        return
      }

      if (user) {
        res.status(400).send({ message: 'Failed! Email is already in use!' })
        return
      }

      next()
    })
  })
}

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      ROLES.findOne({
        name: req.body.roles[i]
      }).exec((err, role) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        if (!role) {
          res.status(400).send({ message: 'Failed! Role ${req.body.roles[i]} does not exist!' })
          return
        }

        next()
      })
    }
  }
  next()
}

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
}

module.exports = verifySignUp
