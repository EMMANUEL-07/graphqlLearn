const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AuthorsSchema = new Schema({
  name: String,
  age: Number,
  authorId: String
})


module.exports = mongoose.model('Author', AuthorsSchema)