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
      title: 'Storm Front',
      description: `In the first novel in the #1 New York Times bestselling Dresden Files series, Harry Dresden’s investigation of a grisly double murder pulls him into the darkest depths of magical Chicago…`,
      overview: `In the first novel in the #1 New York Times bestselling Dresden Files series, Harry Dresden’s investigation of a grisly double murder pulls him into the darkest depths of magical Chicago… 
As a professional wizard, Harry Dresden knows firsthand that the “everyday” world is actually full of strange and magical things—and most of them don’t play well with humans. And those that do enjoy playing with humans far too much. He also knows he’s the best at what he does. Technically, he’s the only at what he does. But even though Harry is the only game in town, business—to put it mildly—stinks. 
So when the Chicago P.D. bring him in to consult on a double homicide committed with black magic, Harry's seeing dollar signs. But where there's black magic, there's a black mage behind it. And now that mage knows Harry's name... 
“A great series—fast-paced, vividly realized and with a hero/narrator who’s excellent company.”—Cinescape`,
      image: '',
      publisher: 'Penguin Publishing Group',
      publisher_date: new Date('2000-04-01T00:00:00').toLocaleDateString(),
      pages: 384,
      rank: 14208,
      isbn13: 9780451457813,
      format: 'paperback',
      price: 10.99,
      category: ['nonfiction', 'mystery', 'fantasy'],
      best_seller: false,
      author_id: '6715cb61ffe5949e8323fb12'
    },
    {
      title: 'Once Upon a Broken Heart',
      description: `ONCE UPON A BROKEN HEART marks the launch of a new series from Stephanie Garber about love, curses, and the lengths that people will go to for happily ever after`,
      overview: `For as long as she can remember, Evangeline Fox has believed in true love and happy endings . . . until she learns that the love of her life will marry another. 
Desperate to stop the wedding and to heal her wounded heart, Evangeline strikes a deal with the charismatic, but wicked, Prince of Hearts. In exchange for his help, he asks for three kisses, to be given at the time and place of his choosing. 
But after Evangeline’s first promised kiss, she learns that bargaining with an immortal is a dangerous game — and that the Prince of Hearts wants far more from her than she’d pledged. He has plans for Evangeline, plans that will either end in the greatest happily ever after, or the most exquisite tragedy.`,
      image: '',
      publisher: 'Flatiron Books',
      publisher_date: new Date('2023-03-28T00:00:00').toLocaleDateString(),
      pages: 432,
      rank: 750,
      isbn13: 9781250268402,
      format: 'paperback',
      price: 12.99,
      category: ['nonfiction', 'romance', 'fantasy'],
      best_seller: true,
      author_id: '6716560a9f93cdb5711e5fdd'
    },
    {
      title: 'Sandwich',
      description: `Pushed and pulled between her parents and her children, a woman faces her past and her future, in a story about the ins and outs and joy of life. Think Vintage Contemporaries by Dan Kois or anything by Laurie Colwin.`,
      overview: `For the past two decades, Rocky has looked forward to her family’s yearly escape to Cape Cod. Their humble beach-town rental has been the site of sweet memories, sunny days, great meals, and messes of all kinds: emotional, marital, and—thanks to the cottage’s ancient plumbing—septic too. 
This year’s vacation, with Rocky sandwiched between her half-grown kids and fully aging parents, promises to be just as delightful as summers past—except, perhaps, for Rocky’s hormonal bouts of rage and melancholy. (Hello, menopause!) Her body is changing—her life is, too. And then a chain of events sends Rocky into the past, reliving both the tenderness and sorrow of a handful of long-ago summers. 
It's one precious week: everything is in balance; everything is in flux. And when Rocky comes face to face with her family’s history and future, she is forced to accept that she can no longer hide her secrets from the people she loves.`,
      image: '',
      publisher: 'HarperCollins',
      publisher_date: new Date('2024-06-18T00:00:00').toLocaleDateString(),
      pages: 240,
      rank: 1508,
      isbn13: 9780063345164,
      format: 'hardcover',
      price: 26.99,
      category: ['fiction', 'family life'],
      best_seller: true,
      author_id: '6716582f8a7d5c2801dc43a2'
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