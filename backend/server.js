// entry point for backend app

import express from "express";

import data from "./data.js"; //put data.js instead of data.

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

// this creates a basic express server
//to make server update automatically - install npm install --save-dev nodemon
//nodemon - updates server