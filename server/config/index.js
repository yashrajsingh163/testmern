const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://yashrajsingh:bNaGwJoJa2uUPRMM@cluster0.t3qpa.mongodb.net/mern?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,

  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});