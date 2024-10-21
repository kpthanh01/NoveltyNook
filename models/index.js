const mongoose = require('mongoose')
const userSchema = require('./user')
const librarySchema = require('./library')
const bookSchema = require('./book')
const authorSchema = require('./author')

const User = mongoose.model('Users', userSchema)
const Library = mongoose.model('Libraries', librarySchema)
const Book = mongoose.model('Books', bookSchema)
const Author = mongoose.model('Authors', authorSchema)

module.exports = {
  User,
  Library,
  Book,
  Author
}

