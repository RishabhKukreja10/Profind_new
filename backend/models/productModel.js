import mongoose from 'mongoose'




const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    amazonUrl: {
      type: String,
      required: true
    },
    flipkartUrl: {
      type: String,
      required: true
    },
    amazonPrice: {
      type: Number,
      required: true,
    },
    flipkartPrice: {
      type: Number,
      required: true,
    }

  },
  {
    timestamps: true,
  }
)

const Products = mongoose.model('Products', productSchema)

export default Products