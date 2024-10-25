const db = require('../db')
const { User, Library, Book, Author } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // let library1 = [{
  //   user_id: '671653e99f93cdb5711e5fd6',
  //   books: [],
  // }]

  // await Library.insertMany(library1)
  // console.log('Library Created!')

  // let author1 = [
  //   {
  //     name: 'Sally Rooney',
  //     description: `Sally Rooney is an Irish novelist. She is the author of Beautiful World, Where Are You, Conversations with Friends, and Normal People. She also contributed to the writing and production of the Hulu/BBC television adaptation of Normal People.`,
  //     image: '',
  //   },
  //   {
  //     name: 'Debbie Macomber',
  //     description: `When Debbie Macomber started out as an author, she was a young, dyslexic mother of four who wrote in her kitchen on a rented typewriter. Years later, she's the bestselling author of dozens of heartwarming novels that celebrate love, laughter, and the bonds of family and friendship. Her Cedar Cove and Blossom Street series include some of her most popular titles, and several of her Christmas books have been turned into Hallmark Channel movies.`,
  //     image: '',
  //   },
  //   {
  //     name: 'Fawn Weaver',
  //     description: `When Debbie Macomber started out as an author, she was a young, dyslexic mother of four who wrote in her kitchen on a rented typewriter. Years later, she's the bestselling author of dozens of heartwarming novels that celebrate love, laughter, and the bonds of family and friendship. Her Cedar Cove and Blossom Street series include some of her most popular titles, and several of her Christmas books have been turned into Hallmark Channel movies.`,
  //     image: '',
  //   },
  // ]

  // await Author.insertMany(author1)
  // console.log('Author Created!')

    let book1 = [
      {
        title: 'Intermezzo',
        description: `An exquisitely moving story about grief, love, and family, from the global phenomenon Sally Rooney.`,
        overview: `Aside from the fact that they are brothers, Peter and Ivan Koubek seem to have little in common. 
Peter is a Dublin lawyer in his thirties—successful, competent, and apparently unassailable. But in the wake of their father's death, he's medicating himself to sleep and struggling to manage his relationships with two very different women—his enduring first love, Sylvia, and Naomi, a college student for whom life is one long joke. 
Ivan is a twenty-two-year-old competitive chess player. He has always seen himself as socially awkward, a loner, the antithesis of his glib elder brother. Now, in the early weeks of his bereavement, Ivan meets Margaret, an older woman emerging from her own turbulent past, and their lives become rapidly and intensely intertwined. 
For two grieving brothers and the people they love, this is a new interlude—a period of desire, despair, and possibility; a chance to find out how much one life might hold inside itself without breaking.`,
        image: 'https://prodimage.images-bn.com/pimages/9780374608514_p0_v3_s1200x630.jpg',
        publisher: 'Farrar, Straus and Giroux',
        publisher_date: new Date('2024-09-24T00:00:00').toLocaleDateString(),
        pages: 432,
        rank: 199,
        isbn13: 9780374608514,
        format: 'eBook',
        price: 26,
        category: ['fiction'],
        best_seller: true,
        author_id: '671b8cfeffdc0abc75e828e1'
      },
      {
        title: 'A Christmas Duet',
        description: `“A perfectly delicious Christmas bonbon of a novel.”—Mary Kay Andrews, New York Times bestselling author of The Santa Suit and Bright Lights, Big Christmas`,
        overview: `Hailey Morgan’s life has always revolved around music. She once had big dreams of becoming a professional songwriter, but the reality of life has led her to working as an assistant high school band teacher in Portland. As the holidays approach, Hailey dreads the annual tradition of spending Christmas with her family and dodging her mother’s meddling questions about her love life. 
When Hailey’s close friend offers her the use of her family’s empty cabin for a rejuvenating solo holiday retreat, Hailey finally decides to do something to make herself happy. However, her arrival in the small town of Podunk, Oregon, is anything but peaceful when she discovers the cabin has been invaded by several wild animals. Luckily, Jay, the son of the town’s main store proprietor—and an incredibly handsome and charming former musician to boot—is more than willing to help. 
Soon Hailey and Jay are nearly inseparable, chopping down and decorating a Christmas tree, sipping hot cocoa in front of a cozy fire, and best of all, playing music together. Jay’s positive feedback and encouragement inspire Hailey to believe she might succeed as a songwriter after all. But even in her snow-dusted oasis, family holiday drama still finds Hailey, interrupting and threatening her newfound peace and confidence. Meanwhile revelations from Jay present complications of their own. Suddenly her Christmas paradise has become a winter storm and Hailey must weather through the challenges to stand up for herself and embrace the holiday spirit.`,
        image: 'https://m.media-amazon.com/images/I/81TBG7iAKsL._AC_UF1000,1000_QL80_.jpg',
        publisher: 'Random House Publishing Group',
        publisher_date: new Date('2024-10-15T00:00:00').toLocaleDateString(),
        pages: 288,
        rank: 83,
        isbn13: 9780593725344,
        format: 'eBook',
        price: 9.99,
        category: ['nonfiction', 'romance'],
        best_seller: true,
        author_id: '671b8cfeffdc0abc75e828e2'
      },
      {
        title: 'The Bookshop: A History of the American Bookstore',
        description: `An affectionate and engaging history of the American bookstore and its central place in American cultural life, from department stores to indies, from highbrow dealers trading in first editions to sidewalk vendors, and from chains to special-interest community destinations`,
        overview: `Evan Friss’s history of the bookshop draws on oral histories, archival collections, municipal records, diaries, letters, and interviews with leading booksellers to offer a fascinating look at this institution beloved by so many. The story begins with Benjamin Franklin’s first bookstore in Philadelphia and takes us to a range of booksellers including the Strand, Chicago’s Marshall Field & Company, the Gotham Book Mart, specialty stores like Oscar Wilde and Drum and Spear, sidewalk sellers of used books, Barnes & Noble, Amazon Books, and Parnassus. The Bookshop is also a history of the leading figures in American bookselling, often impassioned eccentrics, and a history of how books have been marketed and sold over the course of more than two centuries—including, for example, a 3,000-pound elephant who signed books at Marshall Field’s in 1944.`,
        image: 'https://m.media-amazon.com/images/I/81a1UWnv2bL._AC_UF1000,1000_QL80_.jpg',
        publisher: 'Penguin Publishing Group',
        publisher_date: new Date('2020-08-06T00:00:00').toLocaleDateString(),
        pages: 416,
        rank: 4056,
        isbn13: 9780593299920,
        format: 'hardcover',
        price: 30,
        category: ['fiction', 'history'],
        best_seller: true,
        author_id: '671b8cfeffdc0abc75e828e3'
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