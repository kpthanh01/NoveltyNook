const { Book } = require('../models')

const getAllBook = async (req, res) => {
  try {
    const book = await Book.find({})
    res.json(book)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBookById = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const book = await Book.findById(id)
    if (book) {
      return res.json(book)
    }
    return res.status(404).send('Book with this id does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('This Book does not exist')
    }
    return res.status(500).send(error.message)
  }
}

const createBook = async (req, res) => {
  try {
    const newBook = await new Book(req.body)
    await newBook.save()
    return res.status(201).json({ newBook })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params
    const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true })
    if (updateBook) {
      return res.status(200).json(updateBook)
    }
    throw new Error('Book not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const deleteBook = await Book.findByIdAndDelete(id)
    if (deleteBook) {
      return res.status(200).send('Book deleted')
    }
    throw new Error('Book not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook
}