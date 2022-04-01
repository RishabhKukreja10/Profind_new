import CommentModel from '../models/CommentModel.js'
import productModel from '../models/productModel.js'
import RecentProductModel from '../models/recentProduct.js'
// const ErrorResponse = require("../utils/errorResponse");=

const addRecents= async (req, res) => {
    let Recent = {
        user: req.body.userId,
    }

    try {
        const product = await productModel.findOne({ amazonUrl: req.body.amazonUrl });
        if (product) {
            Recent.product = product._id;
            const pro = await RecentProductModel.findOne({ product: product._id });
            if(pro){
                const product_del = await RecentProductModel.findOneAndDelete({ product: product._id }); 
            }
            const del=await RecentProductModel.create(Recent);
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
            Recent.product = productCreated._id;
            const con=await RecentProductModel.create(Recent);
            res.status(200).json({ success: true });
        }
    } catch (err) {
        console.log(err);
    }

}


const getRecents = async (req, res) => {
    const userId = req.headers.userid;
    const amazonUrl = req.headers.amazonurl;
    try {
        const sort = {'createdAt': -1}
        var recents = await RecentProductModel.find({ user: userId }).sort(sort).populate({path:'product',model:productModel});
        //console.log(recents);
       res.status(200).json({ success: true,recents });
    } catch (err) {
        console.log(err);
    }
}



export { addRecents, getRecents }