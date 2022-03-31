import express from 'express'
const router = express.Router()
import { addWishList, deleteWishList, getWishList} from '../controllers/wishListController.js'
import { protect } from '../middleware/authMiddleware.js'

/* router.post('/',protect,addWishList )

router.get('/', getWishList)

router.delete('/', deleteWishList)  */
router.route('/').get(protect,getWishList).post(protect,addWishList).delete(protect,deleteWishList);

export default router
