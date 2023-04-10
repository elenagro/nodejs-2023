const mongoose = require("mongoose");

const init = () => {
  const dsn = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.xqilkst.mongodb.net/${process.env.DB_DATA}?retryWrites=true&w=majority`;
  mongoose.connect(dsn);
};

module.exports = {
  init,
};
