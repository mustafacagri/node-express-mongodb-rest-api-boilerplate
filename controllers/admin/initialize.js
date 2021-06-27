const User = require('../../models/user')
const { response } = require('../../classes')
const Role = require('../../models/role')

async function init(req, res, next) {
  let data = []
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      const roles = ['user', 'moderator', 'admin']
      roles.forEach(name => {
        new Role({ name }).save(err => {
          if (err) console.log('error', err)
          data.push(`added '${name}' to roles collection`)
        })
      })
    }
  })

  return res.json(new response.success(data))
}

module.exports = init
