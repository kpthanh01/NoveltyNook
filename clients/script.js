const carouselList = document.querySelector('#section1')
const main = document.querySelector('main')
const loginPage = document.querySelector('#login')
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

  data.forEach(element => {
    let containerBook = document.createElement('div')
    containerBook.setAttribute('class', 'card book-item')
    containerBook.setAttribute('onclick', 'clickBook(this)')
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

const setTabData = (event) => {
  let category = event.getAttribute('data-tab')
  sessionStorage.setItem('tab', category)
}

loadPage()