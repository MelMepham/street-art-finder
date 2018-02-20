const express = require('express')
const app = express()
var server = require('../server/server')
const db = require('../db')
const router = express.Router()

router.get('/api/v1/art', (req, res) => {
  console.log(req)
  db.getArt()
    .then(art => {
      res.json({art:art})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/api/v1/users', (req, res) => {
  console.log(req)
  db.getArt()
    .then(users => {
      res.json({users:users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
