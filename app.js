const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Import Routes

const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

//Routes

app.get("/", (req, res) => {
  res.send("we are home fucker");
});

//Connect to DB

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);
//Start the server
app.listen(3000);
