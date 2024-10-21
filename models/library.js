const { Schema } = require('mongoose')

const Library = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, required: true },
    books: { type: [Schema.Types.ObjectId], required: false },
  },
  { timestamps: true }
)

module.exports = Library