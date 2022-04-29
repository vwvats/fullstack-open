const listHelper = require('../utils/list_helper')
const { listWithOneBlog, listWithManyBlogs } = require('./dummyBlogData.js')

describe('author with most blogs written', () => {
  test('for a list with single blog, returns the author with 1', () => {
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', blogs: 1 })
  })

  test('for a list with many blogs, returns the author with most blog count', () => {
    const result = listHelper.mostBlogs(listWithManyBlogs)
    expect(result).toEqual({ author: 'Robert C. Martin', blogs: 3 })
  })
})