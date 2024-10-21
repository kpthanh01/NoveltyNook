const db = require('../db')
const { User, Library, Book, Author } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // let author1 = new Author({
  //   name: 'Jim Butcher',
  //   description: `A martial arts enthusiast whose résumé includes a long list of skills rendered obsolete at least two hundred years ago, #1 New York Times bestselling author Jim Butcher turned to writing as a career because anything else probably would have driven him insane. He lives mostly inside his own head so that he can write down the conversation of his imaginary friends, but his head can generally be found in Independence, Missouri. Jim is the author of the Dresden Files, the Codex Alera novels, and the Cinder Spires series, which began with The Aeronaut’s Windlass.`,
  //   image: '',
  // })

  // author1.save()
  // console.log('Author Created!')

  let book1 = [
    {
      title: 'Test',
      overview: `test`,
      image: '',
      publisher: 'test',
      publisher_date: new Date('2024-06-18T00:00:00'),
      pages: 240,
      rank: 1508,
      isbn: 9780063345164,
      format: 'test',
      price: 26.99,
      category: ['test', 'horror'],
      best_seller: false,
      author_id: "6715cb61ffe5949e8323fb12"
    }
  ]

  await Book.insertMany(book1)
  console.log("Book Created")

}

const run = async () => {
  await main()
  db.close()
}

run()