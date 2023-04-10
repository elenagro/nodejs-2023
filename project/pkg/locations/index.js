const mongoose = require("mongoose");

const Location = mongoose.model(
  "location",
  {
    name: String,
    country: String,
    description: String,
  },
  "Locations"
);

const getAll = async () => {
  return Location.find({});
};

const getOne = async (id) => {
  return Location.findOne({ _id: id });
};

module.exports = {
  getAll,
  getOne,
};
