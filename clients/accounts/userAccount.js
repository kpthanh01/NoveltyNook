const profile = document.querySelector('#profile')
const library = document.querySelector('#library')

const userName = document.querySelector('#nameText')
const userAddress = document.querySelector('#addressText')
const userEmail = document.querySelector('#emailText')
const userPhone = document.querySelector('#phoneText')
const profileTexts = document.querySelectorAll('.profile-text')

const inputName = document.querySelector('#name')
const inputAddress = document.querySelector('#address')
const inputEmail = document.querySelector('#email')
const inputPhone = document.querySelector('#phone')
const profileInputs = document.querySelectorAll('.profile-input')

const editBtn = document.querySelector('#profile-edit')
const updateBtn = document.querySelector('#profile-save')

const id = sessionStorage.getItem('id')
const name = sessionStorage.getItem('name')
const email = sessionStorage.getItem('email')
const phone = sessionStorage.getItem('phone')
const address = sessionStorage.getItem('address')

const loadPage = async () => {
  userName.innerHTML = name
  inputName.value = name
  userAddress.innerHTML = address
  inputAddress.value = address
  userEmail.innerHTML = email
  inputEmail.value = email
  userPhone.innerHTML = phone
  inputPhone.value = phone
  populateLibrary()
}

const editProfile = () => {
  profileTexts.forEach(item => {
    item.style.display = 'none'
  })
  profileInputs.forEach(item => {
    item.style.display = 'block'
  })

  editBtn.style.display = 'none'
  updateBtn.style.display = 'block'
}

const updateProfile = async () => {
  const id = sessionStorage.getItem('id')
  try {
    let response = await axios({
      method: 'put',
      url: `http://localhost:3001/users/${id}`,
      data: {
        name: inputName.value,
        email: inputEmail.value,
        address: inputAddress.value,
        phoneNumber: inputPhone.value,
      }
    })

    userName.innerHTML = response.data.name
    inputName.value = response.data.name

    userAddress.innerHTML = response.data.address
    inputAddress.value = response.data.address

    userEmail.innerHTML = response.data.email
    inputEmail.value = response.data.email

    userPhone.innerHTML = response.data.phoneNumber
    inputPhone.value = response.data.phoneNumber

    profileTexts.forEach(item => {
      item.style.display = 'block'
    })
    profileInputs.forEach(item => {
      item.style.display = 'none'
    })
    editBtn.style.display = 'block'
    updateBtn.style.display = 'none'
    alert("Profile Updated")
  } catch (error) {
    alert("An error has occurred")
  }
}

const populateLibrary = async () => {
  let getLibrary = await axios.get(`http://localhost:3001/library/${id}`)
  let books = getLibrary.data.books

  console.log(books)

  for (let i = 0; i < books.length; i++) {
    let getBook = await axios.get(`http://localhost:3001/books/${books[i]}`)
    console.log(getBook.data)
    let bookCard = document.createElement('div')
    bookCard.setAttribute('class', 'card')
    bookCard.setAttribute('style', 'width: 18rem')
    bookCard.innerHTML = `<img src="${getBook.data.image}" class="card-img-top" alt="">`
    library.appendChild(bookCard)
  }
}

const userProfile = () => {
  profile.style.display = 'flex'
  library.style.display = 'none'
}

const userLibrary = () => {
  profile.style.display = 'none'
  library.style.display = 'block'
}

loadPage()