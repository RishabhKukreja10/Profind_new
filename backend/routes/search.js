import express from 'express'
const router = express.Router()
import search from '../controllers/search.js'

router.get('/', search)

export default router
