import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { addComment, getComments, deleteComment} from '../controllers/commentController.js'

// router.post('/',addComment );

// router.get('/',getComments )

router.route('/').get(protect,getComments).post(protect,addComment).delete(protect,deleteComment);

export default router