async function UrlGenerator(url,document) {
  const currentDoc = require(`../../models/${document}`)
  let tempUrl = url
  cur = 0
  check = false
  while(!check && cur < 10){
    const data = await currentDoc.findOne({url: tempUrl})
    if(!data){
      check = true
    }
    else{
      cur++
      tempUrl = `${url}-${cur}`
    }
  }
  url = tempUrl
  return url
}

module.exports = UrlGenerator
