
const awsServerlessExpress = require('aws-serverless-express');
const mongoose = require('mongoose');
const app = require('./src/index');

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
}


// const serverless = require("serverless-http");
// const express = require("express");
// const app = express();

// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from root!",
//   });
// });

// app.get("/hello", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from path!",
//   });
// });

// app.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

// module.exports.handler = serverless(app);
