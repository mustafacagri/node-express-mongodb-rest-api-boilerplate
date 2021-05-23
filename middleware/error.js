const { response, request } = require('../classes')
const errorHandler = (err, req, res, next) => {
  res.status(500).json(new response.fail(err.message || "Server Error"))
}

module.exports = errorHandler
