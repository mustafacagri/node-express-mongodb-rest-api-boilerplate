require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const errorHandler = require('./middleware/error')
// require('./routes')

// const logger = require('middleware/logger')


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const postsRouter = require('./routes/posts')
app.use(`${process.env.API_PREFIX}posts`, postsRouter)

app.use(errorHandler)



app.listen(3000, () => console.log('Server Started'))
