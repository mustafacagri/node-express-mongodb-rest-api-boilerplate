const { response } = require('../classes')
const logger = require('../utils/logger')
const errorHandler = (err, req, res, next) => {
  res.status(500).json(new response.fail(err.message || 'Server Error'))
  logger.error(
    `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  )
}

module.exports = errorHandler
