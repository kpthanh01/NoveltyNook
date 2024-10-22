const carouselList = document.querySelector('#section1')

const getBooks = async () => {
  let response = await axios.get('http://localhost:3001/book')
  let data = response.data
  console.log(data)

  data.forEach(element => {
    let containerBook = document.createElement('div')
    containerBook.setAttribute('class', 'card')
    containerBook.setAttribute('onclick', 'clickBook(this)')
    containerBook.setAttribute('style', 'width: 10rem;')
    containerBook.setAttribute('data-bookid', `${element._id}`)
    containerBook.innerHTML = `
            <img src="${element.image}" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text">${element.title}</p>
            </div>`
    carouselList.appendChild(containerBook)
  })
}

const clickBook = (event) => {
  console.log('I have been click')
  let data = event.getAttribute('data-bookid')
  sessionStorage.setItem('bookId', data)
  window.location.href = './books/book.html'
}

getBooks()