'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const fs = require('fs')
const path = require('path')
const git = require("isomorphic-git")

const app = express()
module.exports = app

app.use(helmet())
app.use(bodyParser.json())

app.post('*', async (req, res) => {
  
  const dir = fs.mkdtempSync(path.join('/tmp', 'test-'))
  console.log(dir)

  await git.clone({
    fs,
    dir,
    url: 'https://github.com/isomorphic-git/isomorphic-git',
    ref: 'master',
    singleBranch: true,
    depth: 3
  })

  const message = (await git.log({fs, dir}))[0].message
  console.log(message)

  res.status(200).json({
    message: message
  })
})

app.get('*', async (req, res) => {


 

  res.status(200).json({
    message: 'message,'
  })
})
