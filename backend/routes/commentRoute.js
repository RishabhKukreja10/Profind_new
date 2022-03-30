import express from 'express'
const router = express.Router()
import { addComment, getComments} from '../controllers/commentController.js'

router.post('/',addComment );

router.get('/',getComments )

export default router
