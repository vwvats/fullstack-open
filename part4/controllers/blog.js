const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
  const { title, author, url, likes = 0 } = request.body
  const blog = new Blog({ title, author, url, likes })
  const result = await blog.save()
  response.status(201).json(result)
})

module.exports = blogRouter
