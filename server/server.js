const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('../routes/apiRoutes')

const server = express()

server.use(express.static('public'))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use('/', routes)


module.exports = server
