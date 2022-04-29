// @eslint-ignore -no-unused-vars
const dummy = (blogs) => { // eslint-disable-line
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((totalLikes, currentBlog) => {
    return totalLikes + currentBlog.likes
  }, 0)
}

module.exports = {
  dummy,
  totalLikes
}