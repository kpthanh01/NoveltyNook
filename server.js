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

app.get('/user', userController.getAllUsers)
app.get('/user/:email', userController.getUserByEmail)
app.post('/user', userController.createUser)
app.put('/user/:id', userController.updateUser)
app.delete('/user/:id', userController.deleteUser)

app.get('/library', libraryController.getLibrary)
app.post('/library', libraryController.createLibrary)
app.put('/library/:id', libraryController.updateLibrary)
app.delete('/library/:id', libraryController.deleteLibrary)

app.get('/book', bookController.getAllBook)
app.get('/book/:id', bookController.getBookById)
app.post('/book', bookController.createBook)
app.put('/book/:id', bookController.updateBook)
app.delete('/book/:id', bookController.deleteBook)

app.get('/author', authorController.getAllAuthor)
app.get('/author/:id', authorController.getAuthorById)
app.post('/author', authorController.createAuthor)
app.put('/author/:id', authorController.updateAuthor)
app.delete('/author/:id', authorController.deleteAuthor)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})