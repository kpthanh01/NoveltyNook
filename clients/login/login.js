const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const login = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/users/login?email=${emailInput.value}&password=${passwordInput.value}`)
    let data = response.data
    console.log(data)
    sessionStorage.setItem('id', data._id)
    sessionStorage.setItem('name', data.name)
    sessionStorage.setItem('email', data.email)
    sessionStorage.setItem('phone', data.phoneNumber)
    window.location.href = '../index.html'

  } catch (error) {
    alert("Account Not Found")
  }
}