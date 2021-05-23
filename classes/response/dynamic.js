const success = require('./success')

function dynamic(list, data) {
  arr = {}
  list.forEach((item, index) => {
    arr[item] = data[item]
  })
  return new success(arr)
}

module.exports = dynamic
