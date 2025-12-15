const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const characterRouter = require('./controllers/characters')
const lightconeRouter = require('./controllers/lightcones')
const planarOrnamentRouter = require('./controllers/planarOrnaments')
const relicRouter = require('./controllers/relics')
const imageRouter = require('./controllers/images')

const app = express()

try {
  mongoose.connect(process.env.MONGODB_INSTANCE)
  console.log('Connected to database successfully!')
} catch (e) {
  console.error('An error occurred when trying to connect to MongoDB database', e)
  return
}

app.use(express.json())
app.use(cors())

app.use('/api/characters', characterRouter)
app.use('/api/lightcones', lightconeRouter)
app.use('/api/planarOrnaments', planarOrnamentRouter)
app.use('/api/relics', relicRouter)
app.use('/api/images', imageRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})