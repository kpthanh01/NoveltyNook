const title = document.querySelector('#title')
const author = document.querySelector('#author')
const format = document.querySelector('#format')
const price = document.querySelector('#price')
const overview = document.querySelector('#overview')
const publisher = document.querySelector('#publisher')
const date = document.querySelector('#date')
const isbn = document.querySelector('#isbn')
const pages = document.querySelector('#pages')
const rank = document.querySelector('#rank')

const loadPage = async () => {
  let id = sessionStorage.getItem('bookId')
  let bookResponse = await axios.get(`http://localhost:3001/book/${id}`)
  let authorResponse = await axios.get(`http://localhost:3001/author/${bookResponse.data.author_id}`)

  title.innerHTML = bookResponse.data.title
  author.innerHTML = authorResponse.data.name
  format.innerHTML = bookResponse.data.format
  price.innerHTML = bookResponse.data.price
  overview.innerHTML = bookResponse.data.overview
  publisher.innerHTML = bookResponse.data.publisher
  date.innerHTML = bookResponse.data.publisher_date
  isbn.innerHTML = bookResponse.data.isbn13
  pages.innerHTML = bookResponse.data.pages
  rank.innerHTML = bookResponse.data.rank
  
}

loadPage()