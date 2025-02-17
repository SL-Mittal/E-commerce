const mongoose = require("mongoose");

const connection = () => {
  console.log("process.env.MONGO_URI", process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connected succesfully");
    })
    .catch((err) => console.log("error", err));
};

module.exports = {
  connection,
};
