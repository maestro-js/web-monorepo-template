'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const BuiltTime = require('./built-time')

const app = express()
module.exports = app

app.use(helmet())
app.use(bodyParser.json())

app.post('*', (req, res) => {  
  res.status(200).json({
    message: `
    This Lambda was built at ${new Date(BuiltTime)}.
    The current time is ${new Date()}
  `,
    last_update: new Date(BuiltTime)
  })
})

app.get('*', (req, res) => {
  res.status(200).json({
    message: `
    This Lambda was built at ${new Date(BuiltTime)}.
    The current time is ${new Date()}
  `,
    last_update: new Date(BuiltTime)
  })
})
