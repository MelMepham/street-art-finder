const express = require('express')
const app = express()
var server = require('../server')
const db = require('../db/db')
const router = express.Router()

router.get('/api/v1/loginUsers', (req, res) => {
  db.loginUsers()
    .then(users => {
      res.json({users:users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

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
  .then(() => res.sendStatus(202))
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/api/v1/users', (req, res) => {
  db.postUser(req.body)
  .then(res.sendStatus(202))
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
