import mongoose, { trusted } from "mongoose";

const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: Array,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        offerPrice: {
            type: Number,
            required: trusted
        },
        image:{
            type: Array,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        inStock: {
            type: Boolean,
            default: true
        }
},{timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product;