const { response, request, dbc } = require('../../classes')
const User = require('../../models/user')
const Role = require('../../models/role')

exports.allUsers = async (req, res) => {
  try {
    const users = await User.find()
    const roles = await Role.find()
    res.json(new response.success({users, roles}))
  } catch (err) {
    res.status(500).json(new response.fail(err.message))
  }
}

exports.getUser = async (req, res) => {
  try {
    res.json(new response.success(res.user))
  } catch(err) {
    res.status(500).json(new response.fail(err.message))
  }
}
