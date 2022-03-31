import wishListModel from '../models/wishListModel.js'
import productModel from '../models/productModel.js'
// const ErrorResponse = require("../utils/errorResponse");=

const addWishList = async (req, res) => {
  //console.log("Hello there");
  //console.log(req.body);
  let wishList = {
    user: req.body.userId
  }
  try {
    const product = await productModel.findOne({ amazonUrl: req.body.amazonUrl });
    if (product) {
      console.log("if");
      const chkAlreadyThere = wishListModel.findOne({ user: req.body.userId, product: product._id });
      if (chkAlreadyThere){
        console.log("already there");
        res.status(200).json({ success: true, message: "Already wishlisted" })
      } 
      else {
        console.log("temp");
        wishList.product = product._id;
        const temp=await wishListModel.create(wishList);
        console.log(temp);
        res.status(200).json({ success: true });
      }
    }
    else {
      console.log("temp else");
      let product = {
        name: req.body.name,
        image: req.body.image,
        amazonUrl: req.body.amazonUrl,
        flipkartUrl: req.body.flipkartUrl,
        amazonPrice: req.body.amazonPrice,
        flipkartPrice: req.body.flipkartPrice
      }
      const productCreated = await productModel.create(product);
      console.log(productCreated);
      wishList.product = productCreated._id;
      await wishListModel.create(wishList);
      res.status(200).json({ success: true });
    }


  } catch (err) {
    console.log(err);
  }
}

const getWishList = async (req, res) => {
  const userId = req.headers.userid;
  try {
    const wishLists = await wishListModel.find({ user: userId });
    const temp = [];
    if (wishLists) {
      wishLists.forEach(async (wishlist) => {
        temp.push(wishlist.product);
      })
      // console.log(temp);
      var response = await productModel.find({ _id: { "$in": temp } });
      // console.log(response);
      res.status(200).json({ success: true, response });

    } else res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
}

const deleteWishList = async (req, res) => {
  let wishListId = req.headers.wishlistid;
  let userId = req.headers.userid;
  try {
    const deletepost = await wishListModel.findOne({ product: wishListId, user: userId })
    // console.log(deletepost);
    if (deletepost) {
      const temp = await wishListModel.findByIdAndDelete(deletepost._id)
      res.status(200).json({ success: true })
    }
    else res.status(404).json({ success: false, error: "error 404" })
  } catch (err) {
    console.log(err);
  }
}
export { addWishList, getWishList, deleteWishList }
