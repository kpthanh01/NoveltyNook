const { Schema } = require('mongoose')

const Author = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = Author