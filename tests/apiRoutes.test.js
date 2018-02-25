const request = require('supertest')

const app = require('../server/server')

jest.mock('../server/db/db', () => ({
    getArt: () => Promise.resolve([{}, {}]),
    postArt: art => {
      if (art && Object.keys(art).length > 0) {
        return Promise.resolve([])
      } else {
        return Promise.reject('No Art. Do Better.')
      }
    }
  })
)

test('Api set up', () => {
  return request(app)
    .get('/api/v1/art')
    .expect(200)
    .then(res => {
      expect(res.body.hasOwnProperty('art')).toBeTruthy()
      expect(res.body.art.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
}),


test('testing postArt', () => {
  return request(app)
    .post('/api/v1/art')
    .send({hello: 'world'})
    .expect(202)
    .then(res => expect(res.body).toEqual({}))
    .catch(err => expect(err).toBeFalsy())
})

test('testing postArt errors', () => {
  return request(app)
    .post('/api/v1/art')
    .expect(500)
    .then(res => expect(res.body).toBeTruthy())
    .catch(err => expect(err).toBeFalsy())
})
