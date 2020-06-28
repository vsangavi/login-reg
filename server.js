//const { Mongoose } = require('mongoose');
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./key");
const signuprouter = require("./routes/signuproute");
const app = express();
app.use(bodyParser.json());

const db = mongoURI;
app.use("/signuproute", signuprouter);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`System is listening on the port ${port}`);
});
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongodb conected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
