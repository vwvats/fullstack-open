// helper function to hydrate the DB with dummy data
const config = require('../utils/config')
const mongoose = require('mongoose')
const { listWithManyBlogs } = require('../tests/dummyBlogData')
const Blog = require('../models/blog')

const hydrateDB = async () => {
  try {
    for (let blog of listWithManyBlogs) {
      let blogObject = new Blog(blog)
      await blogObject.save()
      console.log('one blog added to DB')
    }
  } catch (exception) {
    console.log(exception)
  }
}

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
    return hydrateDB()
  })
  .then(() => {
    console.log('all blogs added to BD')
    mongoose.connection.close()
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })
