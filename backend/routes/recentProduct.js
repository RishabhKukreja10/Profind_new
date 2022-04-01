import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { addRecents, getRecents} from '../controllers/recentProduct.js'


router.route('/').get(protect,getRecents).post(protect,addRecents);

export default router