class Response {
  constructor(data, message = null) {
    this.isSuccess = true
    this.data = data
    this.message = message
  }
}

module.exports = Response
