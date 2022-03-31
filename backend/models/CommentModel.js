import mongoose from 'mongoose'
import moment from 'moment'
const date = moment().utcOffset("+0530").format('MMMM Do YYYY, h:mm a');


const commentSchema = mongoose.Schema(
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
        comment: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            default: date
        }
    },
    {
        timestamps: true,
    }
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment