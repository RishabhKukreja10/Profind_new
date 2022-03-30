import express from 'express'
const router = express.Router()
import { addWishList, deleteWishList, getWishList} from '../controllers/wishListController.js'

router.post('/',addWishList )

router.get('/', getWishList)

router.delete('/', deleteWishList)

export default router
