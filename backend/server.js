import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import search from './routes/search.js'
import wishListRoute from './routes/wishListRoute.js'
import commentRoute from './routes/commentRoute.js'
import recentProduct from './routes/recentProduct.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/users', userRoutes)
app.use('/api/amazon', search)
app.use('/api/wishlist',wishListRoute)
app.use('/api/comment',commentRoute)
app.use('/api/addRecent',recentProduct)

app.listen(5000, console.log('Server running on port 5000'))
