import { connect } from "mongoose";

const MongoURI = `mongodb+srv://admin:admin@cluster0.ve1y6o5.mongodb.net/?retryWrites=true&w=majority`;

const connectTOMongo = () => {
  connect(MongoURI);
  console.log("Connected to mongodb successfully.");
};

export default connectTOMongo;
