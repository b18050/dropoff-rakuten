/* eslint-disable */
const config = require('./utils/config') 
const express = require('express')
const app = express()
const cors = require('cors')
const markersRouter = require('./controllers/markers')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {    
        logger.info('connected to MongoDB')  
    })  
    .catch((error) => {    
        logger.error('error connecting to MongoDB:', error.message)  
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

const morgan = require('morgan')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host')) // This is a modified version of morgan's tiny predefined format string.

morgan.token('host', function(req) {
  const marker = {
    title: req.body.title,
    description:req.body.description,
    pincode: req.body.pincode
  }
  return (JSON.stringify(marker))
})

app.use('/api/markers', markersRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
// app.use(middleware.TokenExpiredError)
module.exports = app
