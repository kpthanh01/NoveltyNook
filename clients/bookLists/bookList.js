const bookList = document.querySelector('#bookList')
const loginBtn = document.querySelector('#loginBtn')
const myAccount = document.querySelector('#myAccount')

const loadPage = async () => {
  const userId = sessionStorage.getItem('id')
  if(userId) {
    loginBtn.style.display = 'none'
    myAccount.style.display = 'block'
  }

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
      <div>
        <h4>${element.title}</h4>
        <p>by <span>${author.data.name}</span></p>
        <div>${element.description}</div>
        <div>
          <div>
            <span>Format: ${element.format}</span>
            <span>Price: ${element.price}</span>
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

loadPage()