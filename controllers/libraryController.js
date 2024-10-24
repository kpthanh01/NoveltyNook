const { Library } = require('../models')

const getLibrary = async (req, res) => {
  try {
    const library = await Library.find({})
    res.json(library)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getLibraryByUserId = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await Library.findOne({user_id: userId})
    if (user) {
      return res.json(user)
    }
    return res.status(404).send('User with this email does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('This user does not exist')
    }
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
    const { userId } = req.params
    const updateLibrary = await Library.findByIdAndUpdate(userId, req.body, { new: true })
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
  getLibraryByUserId,
  createLibrary,
  updateLibrary,
  deleteLibrary
}