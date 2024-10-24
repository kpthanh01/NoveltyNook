const bookList = document.querySelector('#bookList')

const getBooks = async () => {
  let response = await axios.get('http://localhost:3001/books')
  let data = response.data
  console.log(data)

  data.forEach( async element => {
    let containerBook = document.createElement('div')
    let author = await axios.get(`http://localhost:3001/authors/${element.author_id}`)
    console.log(author.data)
    containerBook.setAttribute('onclick', 'clickBook(this)')
    containerBook.setAttribute('data-bookid', `${element._id}`)
    containerBook.setAttribute('class', 'container-fluid book-container')
    containerBook.innerHTML = `
      <div>
        <img class="book-cover" src="${element.image}" alt="">
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
          <button class="btn btn-primary">Add Library</button>
          <a href="../books/book.html">Test</a>
        </div>
      </div>`
      bookList.appendChild(containerBook)
  })
}

const clickBook = (event) => {
  let data = event.getAttribute('data-bookid')
  sessionStorage.setItem('bookId', data)
  window.location.href = './book.html'
}

getBooks()