const { Author } = require('../models')

const getAllAuthor = async (req, res) => {
  try {
    const author = await Author.find({})
    res.json(author)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params
    const author = await Author.findById(id)
    if (author) {
      return res.json(author)
    }
    return res.status(404).send('Author with this id does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('This Author does not exist')
    }
    return res.status(500).send(error.message)
  }
}

const createAuthor = async (req, res) => {
  try {
    const newAuthor = await new Author(req.body)
    await newAuthor.save()
    return res.status(201).json({ newAuthor })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params
    const updateAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true })
    if (updateAuthor) {
      return res.status(200).json(updateAuthor)
    }
    throw new Error('Author not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params
    const deleteAuthor = await Author.findByIdAndDelete(id)
    if (deleteAuthor) {
      return res.status(200).send('Author deleted')
    }
    throw new Error('Author not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllAuthor,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
}