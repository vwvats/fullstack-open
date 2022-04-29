const listHelper = require('../utils/list_helper')
const { listWithOneBlog, listWithManyBlogs } = require('./dummyBlogData.js')

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has many blogs, adds the likes of each and returns it', () => {
    const result = listHelper.totalLikes(listWithManyBlogs)
    expect(result).toBe(36)
  })
})