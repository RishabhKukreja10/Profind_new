import CommentModel from '../models/CommentModel.js'
import productModel from '../models/productModel.js'
// const ErrorResponse = require("../utils/errorResponse");=

const addComment = async (req, res) => {
    let comment = {
        user: req.body.userId,
        comment: req.body.comment
    }
    try {
        const product = await productModel.findOne({ amazonUrl: req.body.amazonUrl });
        if (product) {
            comment.product = product._id;
            await CommentModel.create(comment);
            res.status(200).json({ success: true });
        } else {
            let product = {
                name: req.body.name,
                image: req.body.productImage,
                amazonUrl: req.body.amazonLink,
                flipkartUrl: req.body.flipkartLink,
                amazonPrice: req.body.amazonPrice,
                flipkartPrice: req.body.flipkartPrice
            }
            const productCreated = await productModel.create(product);
            // console.log(productCreated);
            comment.product = productCreated._id;
            await CommentModel.create(comment);
            res.status(200).json({ success: true });
        }
    } catch (err) {
        console.log(err);
    }

}


const getComments = async (req, res) => {
    const userId = req.headers.userid;
    const amazonUrl = req.headers.amazonurl;
    try {
        var comments = await CommentModel.find({ user: userId });
        let temp = [];
        if (comments) {
            comments.forEach(async (comment) => {
                temp.push(comment.product);
            })
            var response = await productModel.find({ _id: { "$in": temp } });
            response = response.filter((indi) => {
                return (indi.amazonUrl == amazonUrl)
            })
            var arr = [];
            response.forEach((indi) => {
                arr.push(indi._id);
            })
            comments = comments.filter((indi) => {
                var bool = false;
                for (let i = 0; i < arr.length; ++i) {
                    if (arr[i] == indi.product.toString()) bool = true;
                }
                return bool;
            })
            res.status(200).json({ success: true, comments });

        } else res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
    }
}

const deleteComment = async (req, res) => {
    console.log(req.headers);
    let commentid = req.headers.commentid;
    try {
        const deleteComment = await CommentModel.findOne({ _id:commentid })
        // console.log(deleteComment);
        if (deleteComment) {
            const temp = await CommentModel.findByIdAndDelete(commentid)
            res.status(200).json({ success: true })
        }
        else res.status(404).json({ success: false, error: "error 404" })
    } catch (err) {
        console.log(err);
    }

}


export { addComment, getComments, deleteComment }
