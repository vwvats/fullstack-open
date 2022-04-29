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

const mostBlogs = (blogs) => {
  const authorMap = blogs.reduce((authorObject, currentBlog) => {
    if (authorObject[currentBlog.author]) {
      authorObject[currentBlog.author] += 1
    } else {
      authorObject[currentBlog.author] = 1
    }
    return authorObject
  }, {})
  let maxAuthor
  let maxCount = 0
  for (let author in authorMap) {
    if (authorMap[author] > maxCount) {
      maxAuthor = author
      maxCount = authorMap[author]
    }
  }
  return { author: maxAuthor, blogs: maxCount }
}

const mostLikes = (blogs) => {
  let likes = 0
  let index
  blogs.forEach((blog, idx) => {
    if (blog.likes > likes) {
      likes = blog.likes
      index = idx
    }
  })
  return { author: blogs[index].author, likes: blogs[index].likes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
