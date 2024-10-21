const { Schema } = require('mongoose')

const Book = new Schema(
  {
    title: { type: String, required: true },
    overview: { type: String, required: true },
    image: { type: String, required: false },
    publisher: { type: String, required: true },
    publisher_date: { type: Date, required: true },
    pages: { type: Number, required: true },
    rank: { type: Number, required: true },
    isbn: { type: Number, required: true },
    format: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: [String], required: true },
    author_id: { type: [Schema.Types.ObjectId], required: false }
  },
  { timestamps: true }
)

module.exports = Book