const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin22:tabtab123@cluster0.9mlsgec.mongodb.net/nodejs_auth?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.log.bind(`Error connecting to MongoDB`));

db.once("open", function () {
  console.log(`Connected to MongoDB`);
});

module.exports = db;
