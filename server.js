require('dotenv').config()
const express = require('express')
const app = express()
const errorHandler = require('./middlewares/error')
const cors = require('cors')

// cors settings if you need
// var corsOptions = {
//   origin: "http://localhost:8081"
// }
// app.use(cors(corsOptions))

// db config
require('./config/db')

// reponses jsons correctly
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route files
app.use(`${process.env.API_PREFIX}`, require('./routes'))

// error handler middleware
app.use(errorHandler)

// app will listen this port
app.listen(process.env.API_PORT, () => console.log('Server is started'))
