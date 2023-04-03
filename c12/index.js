const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://elegro:02082020ina@javascriptacademy.xqilkst.mongodb.net/c11?retryWrites=true&w=majority";

mongoose.connect(connectionString);

const Users = mongoose.model(
  "users",
  {
    _id: String,
    name: String,
    last_name: String,
    date_of_birth: Date,
  },
  "users"
);

// Users.find({ name: "Elena" })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let newUser = new Users({
//   _id: new mongoose.Types.ObjectId(),
//   name: "Pero",
//   last_name: "Perovski",
//   date_of_birth: new Date("1992-02-01"),
// });

// newUser.save();

// Update

Users.updateOne({ _id: "6421e8ab84434093158b59fb" }, { last_name: "Zlatevski" })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

Users.findOne({ name: "Pero" })
  .then((user) => {
    console.log(user.name);
    console.log(user.last_name);
  })
  .catch((err) => {
    console.log(err);
  });

  
