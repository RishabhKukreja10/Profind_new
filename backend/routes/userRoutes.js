import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  updateUserProfile,
  signupUser, getUserDetails
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(signupUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router.get('/', protect ,getUserDetails)

export default router