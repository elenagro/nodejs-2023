const locations = require("../pkg/locations");

const getAll = async (req, res) => {
  try {
    let data = await locations.getAll();
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getOne = async (req, res) => {
  try {
    let data = await locations.getOne(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAll,
  getOne,
};
