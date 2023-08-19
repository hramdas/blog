const express = require('express')
require("dotenv").config()
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser');
const { port } = require('./src/config/config');
const posts = require('./src/routes/posts');
const mongoConnection = require('./src/config/mongodb-connect')
const app = express();
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

posts(app)

app.listen(port || 2000, async function () {
  await mongoConnection();
  console.log("listening on port ", port);
});