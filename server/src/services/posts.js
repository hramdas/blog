const PostsSchema = require('../models/posts')

const createPost = async (title, subtitle, body, image) => {
  return PostsSchema.create({
    title, subtitle, body, image
  })
}

const findOnePost = (id) => {
  return PostsSchema.findOne({ _id: id })
}

const getPosts = (title, limit, offset) => {
  return PostsSchema.find( title ? { 'title': new RegExp(title, 'i') } : {}).sort({ updated_at: 'desc' }).skip(offset).limit(limit)
}
const getPostsCount = (title) => {
  return PostsSchema.countDocuments( title ? { 'title': new RegExp(title, 'i') } : {})
}

const deletePost = (postId) => {
  return PostsSchema.deleteOne({ _id: postId })
}

module.exports = {
  createPost,
  findOnePost,
  getPosts,
  deletePost,
  getPostsCount
}