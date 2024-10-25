const bookList = document.querySelector('#bookList')
const loginBtn = document.querySelector('#loginBtn')
const myAccount = document.querySelector('#myAccount')

const category = sessionStorage.getItem('tab')

const loadPage = async () => {
  const userId = sessionStorage.getItem('id')
  if (userId) {
    loginBtn.style.display = 'none'
    myAccount.style.display = 'block'
  }
  category == 'book' ? allBooks() : catergoryBooks()
}

const allBooks = async () => {
  let response = await axios.get('http://localhost:3001/books')
  let data = response.data

  data.forEach(async element => {
    let containerBook = document.createElement('div')
    let author = await axios.get(`http://localhost:3001/authors/${element.author_id}`)
    containerBook.setAttribute('class', 'container-fluid book-container')
    containerBook.innerHTML = `
      <div>
        <img class="book-cover" src="${element.image}" alt="" data-bookid="${element._id}" onclick="clickBook(this)">
      </div>
      <div class="book-info">
        <h4>${element.title}</h4>
        <p>by <span>${author.data.name}</span></p>
        <div>${element.description}</div>
        <div>
          <div>
            <span><b>Format:</b> ${element.format}</span>
            <br>
            <span><b>Price:</b> ${element.price}</span>
          </div>
        </div>
      </div>`
    bookList.appendChild(containerBook)
  })
}

const catergoryBooks = async () => {
  let response = await axios.get(`http://localhost:3001/books/category/${category}`)
  let data = response.data

  data.forEach(async element => {
    let containerBook = document.createElement('div')
    let author = await axios.get(`http://localhost:3001/authors/${element.author_id}`)
    containerBook.setAttribute('class', 'container-fluid book-container')
    containerBook.innerHTML = `
      <div>
        <img class="book-cover" src="${element.image}" alt="" data-bookid="${element._id}" onclick="clickBook(this)">
      </div>
      <div class="book-info">
        <h4>${element.title}</h4>
        <p>by <span>${author.data.name}</span></p>
        <div>${element.description}</div>
        <div>
          <div>
            <span><b>Format:</b> ${element.format}</span>
            <br>
            <span><b>Price:</b> ${element.price}</span>
          </div>
        </div>
      </div>`
    bookList.appendChild(containerBook)
  })
}

const clickBook = (event) => {
  let data = event.getAttribute('data-bookid')
  sessionStorage.setItem('bookId', data)
  window.location.href = '../books/book.html'
}

const openLoginPage = () => {
  window.location.href = '../login/login.html'
}

const openAccountPage = () => {
  window.location.href = '../accounts/userAccount.html'
}

const setTabData = (event) => {
  let category = event.getAttribute('data-tab')
  sessionStorage.setItem('tab', category)
}

loadPage()