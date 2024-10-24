const carouselList = document.querySelector('#section1')
const main = document.querySelector('main')
const loginPage = document.querySelector('#login')
const loginBtn = document.querySelector('#loginBtn')
const myAccount = document.querySelector('#myAccount')

const loadPage = async () => {
  const id = sessionStorage.getItem('id')
  const name = sessionStorage.getItem('name')
  if(name) {
    console.log('user exist')
    loginBtn.style.display = 'none'
    myAccount.style.display = 'block'
  }
}

const getBooks = async () => {
  let response = await axios.get('http://localhost:3001/books')
  let data = response.data
  console.log(data)

  data.forEach(element => {
    let containerBook = document.createElement('div')
    containerBook.setAttribute('class', 'card')
    containerBook.setAttribute('onclick', 'clickBook(this)')
    containerBook.setAttribute('style', 'width: 10rem;')
    containerBook.setAttribute('data-bookid', `${element._id}`)
    containerBook.innerHTML = `<img src="${element.image}" class="card-img-top" alt="">`
    carouselList.appendChild(containerBook)
  })
}

const clickBook = (event) => {
  let data = event.getAttribute('data-bookid')
  sessionStorage.setItem('bookId', data)
  window.location.href = './books/book.html'
}

const openLoginPage = () => {
  window.location.href = './login/login.html'
}

const openAccountPage = () => {
  window.location.href = './accounts/userAccount.html'
}


loadPage()
getBooks()