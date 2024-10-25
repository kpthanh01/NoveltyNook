const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const userController = require('./controllers/userController')
const libraryController = require('./controllers/libraryController')
const bookController = require('./controllers/bookController')
const authorController = require('./controllers/authorController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('This is the root for novelty nooks')
})

app.get('/users', userController.getAllUsers)
app.get('/users/login', userController.getUserByEmailPassword)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

app.get('/library/:userId', libraryController.getLibraryByUserId)
app.post('/library', libraryController.createLibrary)
app.put('/library/:userId', libraryController.updateLibrary)
app.delete('/library/:id', libraryController.deleteLibrary)

app.get('/books', bookController.getAllBook)
app.get('/books/:id', bookController.getBookById)
app.get('/books/category/:tab', bookController.getBookByCategory)
app.post('/books', bookController.createBook)
app.put('/books/:id', bookController.updateBook)
app.delete('/books/:id', bookController.deleteBook)

app.get('/authors', authorController.getAllAuthor)
app.get('/authors/:id', authorController.getAuthorById)
app.post('/authors', authorController.createAuthor)
app.put('/authors/:id', authorController.updateAuthor)
app.delete('/authors/:id', authorController.deleteAuthor)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})