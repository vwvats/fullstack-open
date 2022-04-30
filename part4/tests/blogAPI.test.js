const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const { listWithManyBlogs } = require('./dummyBlogData')

const api = supertest(app)

test('blogs are returned as JSON', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('correct number of blogs are returned', async () => {
  await api
    .get('/api/blogs')
    .then((response) => {
      expect(response.body.length)
        .toBe(listWithManyBlogs.length)
    })
})

test('each blog has an id property', async () => {
  await api
    .get('/api/blogs')
    .then((response) => {
      response.body.forEach((blog) => {
        expect(blog.id).toBeDefined()
      })
    })
})

afterAll(() => mongoose.connection.close())
