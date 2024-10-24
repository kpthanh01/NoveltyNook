const title = document.querySelector('#title')
const author = document.querySelector('#author')
const image = document.querySelector('#bookImage')
const format = document.querySelector('#format')
const price = document.querySelector('#price')
const overview = document.querySelector('#overview')
const publisher = document.querySelector('#publisher')
const date = document.querySelector('#date')
const isbn = document.querySelector('#isbn')
const pages = document.querySelector('#pages')
const rank = document.querySelector('#rank')
const loginBtn = document.querySelector('#loginBtn')
const myAccount = document.querySelector('#myAccount')

const userId = sessionStorage.getItem('id')
const bookId = sessionStorage.getItem('bookId')
const userName = sessionStorage.getItem('name')
let libraryData = ''

const loadPage = async () => {
  if (userId) {
    loginBtn.style.display = 'none'
    myAccount.style.display = 'block'
  }

  let bookResponse = await axios.get(`http://localhost:3001/books/${bookId}`)
  let authorResponse = await axios.get(`http://localhost:3001/authors/${bookResponse.data.author_id}`)
  let libraryResponse = await axios.get(`http://localhost:3001/library/${userId}`)

  libraryData = libraryResponse.data

  title.innerHTML = bookResponse.data.title
  author.innerHTML = authorResponse.data.name
  image.setAttribute('src', bookResponse.data.image)
  image.innerHTML = bookResponse.data.image
  format.innerHTML = bookResponse.data.format
  price.innerHTML = bookResponse.data.price
  overview.innerHTML = bookResponse.data.overview
  publisher.innerHTML = bookResponse.data.publisher
  date.innerHTML = bookResponse.data.publisher_date
  isbn.innerHTML = bookResponse.data.isbn13
  pages.innerHTML = bookResponse.data.pages
  rank.innerHTML = bookResponse.data.rank
}

const addToLibrary = async () => {
  let libraryArray = libraryData.books
  if (!libraryArray.find(item => item == bookId)) {
    libraryArray.push(bookId)
    let addBook = await axios.put(`http://localhost:3001/library/${libraryData._id}`, { books: libraryArray })
  } else {
    alert("This Book is already in the library")
  }
}

const openLoginPage = () => {
  window.location.href = '../login/login.html'
}

const openAccountPage = () => {
  window.location.href = '../accounts/userAccount.html'
}

loadPage()