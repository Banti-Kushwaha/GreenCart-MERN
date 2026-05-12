import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";

// Add Product : /api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = req.files;

    let ImageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });

        return result.secure_url;
      }),
    );

    await Product.create({
      ...productData,
      image: ImageUrl,
    });

    res.json({
      success: true,
      message: "Product Added",
    });
  } catch (error) {
    console.log(error.message);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Get Product : /api/product/list
export const productsList = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Get Single Product : /api/product/get/:id
export const productById = async (req, res) => {
  try {
    const {id }= req.userId;
    const product = await Product.find({ id });
    res.json({ success: true, product });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// change Product inStock : /api/product/stock
export const changeStock = async (req, res) => {
  try {
    const { inStock } = req.body;
     const {id} = req.userId;
    await Product.findByIdAndUpdate(id, { inStock });
    res.json({ success: true, message: "Stock Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
