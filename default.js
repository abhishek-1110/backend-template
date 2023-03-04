import { products } from "./constants/data.js"; // actual data
import Product from "./models/product-schema.js"; // schema

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data imported successfully......");
  } catch (error) {
    console.log("Some error while inserting data..", error.message);
  }
};

export default DefaultData;
