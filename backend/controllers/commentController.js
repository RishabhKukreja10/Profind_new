import CommentModel from '../models/CommentModel.js'
import productModel from '../models/productModel.js'
import User from '../models/userModel.js'
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
                image: req.body.image,
                amazonUrl: req.body.amazonUrl,
                flipkartUrl: req.body.flipkartUrl,
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
    console.log("Coming to backend");
    const userId = req.headers.userid;
    const amazonUrl = req.headers.amazonurl;
    var yourComments = []; var othersComments = [];
    try {
        const product = await productModel.findOne({ amazonUrl });
        if (product) {
            console.log(product);

            const comments = await CommentModel.find({ product: product._id }).populate({path:'user',model:User});
           // .populate({path:'product',model:productModel})
            console.log(comments);
            if (comments) {
                comments.forEach((comment) => {
                    console.log(comment.user._id);
                    console.log(userId)
                    if (comment.user._id.toString() === userId) yourComments.push(comment);
                    else othersComments.push(comment);


                })
                res.status(200).json({ success: true, yourComments, othersComments });
            }
            else res.status(200).json({ success: true, yourComments, othersComments });
        }
        else res.status(200).json({ success: true, yourComments, othersComments });
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