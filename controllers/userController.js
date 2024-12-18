const { User } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
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

const getUserByEmailPassword = async (req, res) => {
  try {
    const { email, password } = req.query
    const user = await User.findOne({ email: email, password: password })
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

const createUser = async (req, res) => {
  try {
    let newUser = await new User(req.body)
    await newUser.save()
    return res.status(201).json({ newUser })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (updateUser) {
      return res.status(200).json(updateUser)
    }
    throw new Error('User not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleteUser = await User.findByIdAndDelete(id)
    if(deleteUser) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmailPassword,
  createUser,
  updateUser,
  deleteUser
}