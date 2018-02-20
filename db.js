const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getArt,
  getUsers,
  getFavorites
}

function getArt (testDb) {
  const db = testDb || connection
  return db('art').select()
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select()
}

function getFavorites (testDb) {
  const db = testDb || connection
  return db('favorites').select()
}

//put me in a function
// const db = testDb || connection
// db('art')
//   .join('users', 'users.id', '=', 'art.user_id')
//   .select('users.userName', 'art.id')
//   .then((data) => {
//   })
