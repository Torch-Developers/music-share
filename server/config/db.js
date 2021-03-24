// db.js

const mongoose = require('mongoose')
// eslint-disable-next-line import/no-extraneous-dependencies
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    })

    // eslint-disable-next-line no-console
    console.log('MongoDB is Connected...')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
