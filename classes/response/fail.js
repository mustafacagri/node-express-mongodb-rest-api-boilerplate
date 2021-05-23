class FailedResponse  {
  constructor(message) {
    // super(message)
    this.message = message
    this.isSuccess = false
  }
}

module.exports = FailedResponse
