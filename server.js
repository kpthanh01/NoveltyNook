const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const userController = require('./controllers/userController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('This is the root for novelty nooks')
})

app.get('/user/login/:email', userController.getUserByEmail)
app.post('/user', userController.createUser)
app.put('/user/:id', userController.updateUser)
app.delete('/user/:id', userController.deleteUser)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})