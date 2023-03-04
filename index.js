// import DefaultData from "./default";
import connectTOMongo from "./db.js";
import express from "express";
import DefaultData from "./default.js";

connectTOMongo();

const app = express();
const port = 5000;

// DefaultData();
app.listen(port, () => {
  console.log("Successfully running on", port)
});

DefaultData();


