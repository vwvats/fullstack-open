// @eslint-ignore -no-unused-vars
const dummy = (blogs) => { // eslint-disable-line
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((totalLikes, currentBlog) => {
    return totalLikes + currentBlog.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  let likes = 0
  let index
  blogs.forEach((blog, idx) => {
    if (blog.likes > likes) {
      likes = blog.likes
      index = idx
    }
  })
  return blogs[index]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}