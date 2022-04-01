import mongoose from 'mongoose'

const RecentSchema = mongoose.Schema(
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
        },
        
    },
    {
        timestamps: true,
    }
)

const RecentProduct = mongoose.model('RecentProduct', RecentSchema)

export default RecentProduct