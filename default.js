import { products } from "./constants/data.js";
import Product from "./models/product-schema.js";

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
