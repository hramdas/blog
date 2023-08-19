const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: String ,
  body: String,
  image: String,
  created_by: {type: String, default: 'username'},
},
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  })

module.exports = mongoose.model('posts', postsSchema)