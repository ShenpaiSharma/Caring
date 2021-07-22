
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
