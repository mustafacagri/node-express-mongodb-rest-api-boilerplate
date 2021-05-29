require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/error')
const cors = require('cors')
const Role = require('./models/role')

var corsOptions = {
  // origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => {
  console.log('Connected to Database')
  init() // you can remove this row after first time executing
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(`${process.env.API_PREFIX}auth`, require('./routes/auth'))
app.use(`${process.env.API_PREFIX}user`, require('./routes/user'))
app.use(`${process.env.API_PREFIX}posts`, require('./routes/posts'))

app.use(errorHandler)


app.listen(3000, () => console.log('Server Started'))

function init() {
  // initialize our roles for the first time working
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      const roles = ['user', 'moderator', 'admin']
      roles.forEach(name => {
        new Role({name}).save(err => {
          if (err) console.log('error', err)
          console.log(`added '${name}' to roles collection`)
        })
      })
    }
  })
}