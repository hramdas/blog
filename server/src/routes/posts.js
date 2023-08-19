const upload  = require("../middlewares/multer")
const { addPost, getPosts } = require("../controllers/posts")
const { validateCreatePost } = require("../middlewares/posts")


module.exports = (app) => {
  app.post('/post',  upload.single("image"), validateCreatePost, addPost),
  app.get('/posts', getPosts)
}