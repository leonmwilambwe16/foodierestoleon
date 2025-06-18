import cloudinary from "../lib/cloudinary.js";
import Product from "../Module/product.Schema.js"


const uploadFromBuffer = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "products" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
};


export const getAllProducts = async (req,res)=>{
  try {
    const products = await Product.find({});
    res.json({products})
  } catch (error) {
    console.log("Error in getAllProducts:",error);
    res.status(500).json({message:"Internal server error while fetching products"})
  }
};
export const getPopularProducts = async (req,res)=>{
  try {
    const product = await Product.aggregate([
      {
        $sample:{size:4}
      },
      {
        $match:{isPopular:true}
      },
      {
        $project:{
          _id:1,
          name:1,
          price:1,
          description:1,
          image:1,
          category:1
        }
      }
    ])
    res.json(product);
  } catch (error) {
    console.log("Error in getPopularProducts:", error);
    res.status(500).json({ message: "Internal server error while fetching popular products" });
  }
};

export const createProducts = async (req,res)=>{
  try {
  const {name,description,price,category,brand,image}= req.body;
  let cloudinaryResponse = null;
  if(req.file){
    cloudinaryResponse = await  uploadFromBuffer(req.file.buffer);
  }
  const product = await Product.create({
    name,
    description,
    price,
    category:category,
    image:cloudinaryResponse? cloudinaryResponse.secure_url :"",
  })
  res.status(201).json(product);
  } catch (error) {
    console.log("Error in createProducts:", error);
    res.status(500).json({ message: "Internal server error while creating product" });
  }
};
export const deleteProducts = async (req,res)=>{
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
      return res.status(404).json({message:"Product not found"});
    }
    if(product.image){
      const publicId = product.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`products/${publicId}`);
        console.log("Image deleted from cloudinary");
        res.status(200).json({messae:"Product deleted Successfully"})
      } catch (error) {
        console.log("Error deleting image from cloudinary:", error);
      }
    }
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Product deleted Successfully from database"});
  } catch (error) {
    console.log("Error in deleteProducts:", error);
    res.status(500).json({ message: "Internal server error while deleting product" });
  }
}