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

test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'An eye catching Title',
    author: 'Renowed Author',
    url: 'https://google.com',
    likes: 69
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  const titles = response.body.map(r => r.title)

  expect(response.body).toHaveLength(listWithManyBlogs.length + 1)
  expect(titles).toContain('An eye catching Title')
})

afterAll(() => mongoose.connection.close())
