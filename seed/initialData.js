const db = require('../db')
const { User, Library, Book, Author } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  let user1 = new User({
    name: 'Kevin',
    address: '6000 Medlock Bridge Pkwy, Johns Creek, GA 30022',
    email: 'kevin@gmail.com',
    phoneNumber: '5555555555',
    password: '12345',
  })

  user1.save()
  console.log('User Created!')

  let author1 = new Author({
    name: 'Jim Butcher',
    description: `A martial arts enthusiast whose résumé includes a long list of skills rendered obsolete at least two hundred years ago, #1 New York Times bestselling author Jim Butcher turned to writing as a career because anything else probably would have driven him insane. He lives mostly inside his own head so that he can write down the conversation of his imaginary friends, but his head can generally be found in Independence, Missouri. Jim is the author of the Dresden Files, the Codex Alera novels, and the Cinder Spires series, which began with The Aeronaut’s Windlass.`,
    image: '',
  })

  author1.save()
  console.log('Author Created!')

  let book1 = new Book(
    {
      title: 'storm front',
      overview: `As a professional wizard, Harry Dresden knows firsthand that the “everyday” world is actually full of strange and magical things—and most of them don’t play well with humans. And those that do enjoy playing with humans far too much. He also knows he’s the best at what he does. Technically, he’s the only at what he does. But even though Harry is the only game in town, business—to put it mildly—stinks. So when the Chicago P.D. bring him in to consult on a double homicide committed with black magic, Harry's seeing dollar signs. But where there's black magic, there's a black mage behind it. And now that mage knows Harry's name...`,
      image: '',
      publisher: 'penguin publishing group',
      publisher_date: new Date('2000-04-01T00:00:00'),
      pages: 384,
      rank: 14729,
      isbn: 9780451457813,
      format: 'paperback',
      price: 10.99,
      category: ['nonfiction', 'mystery', 'fantasy'],
      author_id: [author1._id]
    }
  )

  book1.save()
  console.log('Book Created!')

  let library1 = [
    {
      user_id: user1._id,
      books: [book1._id],
    }
  ]

  await Library.insertMany(library1)
  console.log('Library Created!')
}

const run = async () => {
  await main()
  db.close()
}

run()