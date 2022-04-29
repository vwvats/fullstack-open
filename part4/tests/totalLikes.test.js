const listHelper = require('../utils/list_helper')
const { listWithOneBlog, listWithManyBlogs } = require('./dummyBlogData.js')

describe('total likes', () => {
  test('for a list with a single blog, it returns the likes of that blog', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('for a list with  many blogs, adds the likes of each and returns it', () => {
    const result = listHelper.totalLikes(listWithManyBlogs)
    expect(result).toBe(36)
  })
})
