
const request = require('supertest')
const server = require('../../server/server')
const { getQuotes } = require('../../server/db')

jest.mock('../../server/db', () => ({
  getQuotes: jest.fn(() => Promise.resolve([{}, {}]))
}))

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
    })
    .catch(err => expect(err).toBeNull())
})

test('api gets quotes', () => {
  expect.assertions(2)
  return request(server)
    .get('/api/v1/quotes')
    .expect(200)
    .then((res) => {
      expect(getQuotes).toHaveBeenCalled()
      expect(res.body.quotes.length).toBe(2)
    })
})
