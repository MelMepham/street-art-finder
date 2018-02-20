const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
  getArt
}

function getArt (testDb) {
  const db = testDb || connection
  return db('art').select()
}

db('users')
  .join('art', 'art.id', '=', 'users.art_id')
  .select('art.id', 'users.userName')
  .then((data) => {
    console.log(data)
  })


// function getUser (testDb) {
//   const db = testDb || connection
//   return db('users').select()
// }
