const courses = require("../pkg/courses");

const create = async (req, res) => {
  try {
    let data = req.body;
    await courses.create(data);
    res.send(data).status(201);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const getAll = async (req, res) => {
  try {
    let data = await courses.getAll();
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const getOne = async (req, res) => {
  try {
    let data = await courses.getOne(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const updateOne = async (req, res) => {
  try {
    let data = req.body;
    let id = req.params.id;
    await courses.updateOne(id, data);
    res.send(data).status(204);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const deleteOne = async (req, res) => {
  try {
    await courses.remove(req.params.id);
    res.send("").status(204);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
