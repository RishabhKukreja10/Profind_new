import mongoose from 'mongoose'

const wishListSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
        }
    },
    {
        timestamps: true,
    }
)

const WishList = mongoose.model('WishList', wishListSchema)

export default WishList
