const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getArt
}

function getArt (testDb) {
  const db = testDb || connection
  return db('art').select()
}

// function getUser (testDb) {
//   const db = testDb || connection
//   return db('users').select()
// }
