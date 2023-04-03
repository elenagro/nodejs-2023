const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index"); //index.ejs in views
  //   res.send("You have visited the home page.");
});

app.get("/data/:ime", (req, res) => {
  let data = {
    ime: req.params.ime ? req.params.ime : "",
    studenti: [
      { first_name: "Goran", last_name: "Goranovski" },
      { first_name: "Mario", last_name: "Mariovski" },
      { first_name: "Borjan", last_name: "Borjanovski" },
      { first_name: "Jovan", last_name: "Jovanovski" },
      { first_name: "Marko", last_name: "Markovski" },
      { first_name: "Petar", last_name: "Petrovski" },
      { first_name: "Vesna", last_name: "Markovska" },
      { first_name: "Vlado", last_name: "Stojanovski" },
    ],
  };
  res.render("podatoci", data);
});

app.get("/formular", (req, res) => {
  res.render("formular");
});

app.post("/formular-rezultati", (req, res) => {
  let data = {
    ime: req.body.ime ? req.body.ime : '',
    prezime: req.body.prezime ? req.body.prezime : ''
  }
  res.render('formular-rezultat', data)
});

app.listen(8080, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server started on port 8080...");
});
