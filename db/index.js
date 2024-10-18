const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://kphamthanh01:Pokemon123!@cluster0.6nzlj.mongodb.net/noveltyNook')
  .then(()=> {
    console.log('Successfully connect to MongoDB')
  })
  .catch(error => {
    console.error('Connection error', error.message)
  })

const db = mongoose.connection

module.exports = db