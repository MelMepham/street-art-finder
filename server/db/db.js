const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getArt,
  getUsers,
  getFavorites,
  postArt,
  postUser,
  loginUsers
}

function loginUsers (testDb) {
  const db = testDb || connection
  return db('loginUsers').select()
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

function postArt(artDetails, testDb) {
  const db = testDb || connection
  return db('art').insert(artDetails)
}

function postUser(userDetails, testDb) {
  const db = testDb || connection
  return db('users').insert(userDetails)
}



//put me in a function
// const db = testDb || connection
// db('art')
//   .join('favorites', 'artFav_id', 'favorites.artFav_id')
//   .where('favorites.userFav_id', 'userFav_id')
//   .select()
//   .then((data) => {
//   })

//put me in a function
// const db = testDb || connection
// db('art')
//   .join('favorites', 'artFav_id', 'favorites.artFav_id')
//   .where('favorites.userFav_id', 'userFav_id')
//   .select()
//   .then((data) => {
//   })
