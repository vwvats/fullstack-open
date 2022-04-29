const listHelper = require('../utils/list_helper')
const { listWithOneBlog, listWithManyBlogs } = require('./dummyBlogData.js')

describe('most liked blog author', () => {
  test('for a list with a single blog, it returns the blog author and amount of likes', () => {
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 5,
    })
  })

  test('for a list with many blogs, returns the blog author with most likes', () => {
    const result = listHelper.mostLikes(listWithManyBlogs)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 12,
    })
  })
})
