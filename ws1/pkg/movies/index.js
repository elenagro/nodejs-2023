const mongoose = require("mongoose");

const Movie = mongoose.model(
  "movie",
  {
    title: String,
    year: Number,
  },
  "movies"
);

const create = async (req, res) => {
    let movie = new Movie(data);
    return movie.save()
}
const getAll = async () => {
    let movie = new Movie(data);
    return movie.find({})
}
const getOne = async (id) => {
    let movie = new Movie(data);
    return movie.findOne({_id: id})
}
const updateOne = async (id, data) => {
    let movie = new Movie(data);
    return movie.findOne(_id, id)
}


