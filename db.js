import { connect } from "mongoose";

// you have to add your own username and password and remove < >

const MongoURI = `mongodb+srv://<username>:<password>@cluster0.ve1y6o5.mongodb.net/?retryWrites=true&w=majority`;

const connectTOMongo = () => {
  connect(MongoURI);
  console.log("Connected to mongodb successfully.");
};

export default connectTOMongo;
