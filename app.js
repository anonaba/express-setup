const express = require('express')
const morgan = require('morgan')
const app = express()

// 1 middleware
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use((req, res, next) => {
  console.log('hello from middleware')
  next()
})

app.use((req, res, next) => {
  req.reqTime = new Date().toISOString()
  next()
})

// 2 routes
app.use('/api/v1/tours', require('./routes/tourRoutes'))
app.use('/api/v1/users', require('./routes/userRoutes'))

module.exports = app
