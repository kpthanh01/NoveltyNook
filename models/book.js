const { Schema } = require('mongoose')

const Book = new Schema(
  {
    title: { type: String, required: true },
    description: {type: String, required: true},
    overview: { type: String, required: true },
    image: { type: String, required: false },
    publisher: { type: String, required: true },
    publisher_date: { type: String, required: true },
    pages: { type: Number, required: true },
    rank: { type: Number, required: true },
    isbn13: { type: Number, required: true },
    format: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: [String], required: true },
    best_seller: { type: Boolean, required: false },
    author_id: { type: Schema.Types.ObjectId, required: false }
  },
  { timestamps: true }
)

module.exports = Book