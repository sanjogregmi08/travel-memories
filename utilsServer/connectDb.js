const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern_travel_latest", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
