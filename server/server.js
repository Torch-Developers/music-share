// -- Dependencies ------------------------------------------------------------
const express = require('express')
const path = require('path')

// -- Constants ---------------------------------------------------------------
const PORT = process.env.PORT || 3001
// const LOG_MODE = process.env.NODE_ENV === 'production' ? 'common' : 'dev'
const connectDB = require('./config/db')

// -- Express -----------------------------------------------------------------
const app = express()
connectDB()

// -- Static Server (Production) ----------------------------------------------
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'client', 'build')

  // eslint-disable-next-line no-console
  console.log(`Client build path: ${clientBuildPath}\n`)
  app.use(express.static(clientBuildPath))
}

// -- Controller Routes -------------------------------------------------------
app.use(require('./controllers'))

// -- React catch-all ---------------------------------------------------------
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

// -- Main --------------------------------------------------------------------
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server listening on port ${PORT}...`)
})

// -- Export to Tests ---------------------------------------------------------
module.exports = app
