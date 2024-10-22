const { Library } = require('../models')

const getLibrary = async (req, res) => {
  try {
    const library = await Library.find({})
    res.json(library)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await new Library(req.body)
    await newLibrary.save()
    return res.status(201).json({ newLibrary })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateLibrary = async (req, res) => {
  try {
    const { id } = req.params
    const updateLibrary = await Library.findByIdAndUpdate(id, req.body, { new: true })
    if (updateLibrary) {
      return res.status(200).json(updateLibrary)
    }
    throw new Error('Library not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteLibrary = async (req, res) => {
  try {
    const { id } = req.params
    const deleteLibrary = await Library.findByIdAndDelete(id)
    if (deleteLibrary) {
      return res.status(200).send('Library deleted')
    }
    throw new Error('Library not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getLibrary,
  createLibrary,
  updateLibrary,
  deleteLibrary
}