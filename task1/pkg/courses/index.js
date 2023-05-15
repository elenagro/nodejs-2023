const mongoose = require("mongoose");

const Course = mongoose.model(
  "course",
  {
    title: String,
    students: Number,
  },
  "courses"
);

const create = async (data) => {
  let c = new Course(data);
  return c.save();
};

const getAll = async () => {
  return Course.find({});
};

const getOne = async (id) => {
  return Course.findOne({ _id: id });
};

const updateOne = async (id, data) => {
  return Course.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return Course.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  remove,
};
