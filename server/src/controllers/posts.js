const { createPost, getPosts: getPostsService, getPostsCount, } = require('../services/posts')

const addPost = async (req, res) => {
  try {
    const { title, subtitle = null, body = null, } = req.body
    const image = req.file?.filename || null
    
    const { _id } = await createPost(title, subtitle, body, image)

    return res.status(200).send({ message: 'Successfully created post.', id: _id })

  } catch (error) {
    console.log("ERROR", error)
    return res.status(500).send({ message: 'Error while add post' })
  }
}

const getPosts = async (req, res) => {
  try {
    let { page = 1, limit = 10, title } = req.query
    page = parseInt(page) || 1
    limit = parseInt(limit) || 1
    const offset = limit * (page - 1)

    const posts = await getPostsService(title, limit, offset)
    const count = await getPostsCount(title)
    return res.status(200).send({ posts, count })

  } catch (error) {
    console.log("ERROR", error)
    return res.status(500).send({ message: 'Error while getting posts.' })
  }
}

module.exports = {
  addPost,
  getPosts
}