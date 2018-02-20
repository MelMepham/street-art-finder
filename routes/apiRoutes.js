const express = require('express')
const app = express()
var server = require('../server/server')
const db = require('../server/db')
const router = express.Router()

router.get('/api/v1/art', (req, res) => {
  db.getArt()
    .then(art => {
      res.json({art:art})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/api/v1/users', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users:users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/api/v1/favorites', (req, res) => {
  db.getFavorites()
    .then(favorites => {
      res.json({favorites:favorites})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/api/v1/art', (req, res) => {
  db.postArt(req.body)
  .then(res => console.log(res))
})

router.post('/api/v1/users', (req, res) => {
  db.postUser(req.body)
  .then(res => console.log(res))
})

module.exports = router
