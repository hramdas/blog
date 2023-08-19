const validateCreatePost = (req, res, next) => {
  let { title, subtitle, body } = req.body
  if (!title || !title) {
    return res.status(400).send({ message: 'Invalid post title.' })
  }
  next()
}

module.exports = { validateCreatePost }