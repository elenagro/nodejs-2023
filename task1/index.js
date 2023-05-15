const express = require("express");
const courses = require("./handlers/courses");
const db = require("./pkg/db");
const auth = require("./handlers/auth");
const { expressjwt: jwt } = require("express-jwt");
const userStudent = require("./pkg/user");

db.init();

const app = express();
app.use(express.json());

api.use(
  jwt({
    algorithms: ["HS256"],

    secret: process.env.JWT_SECRET,
  }).unless({
    path: [
      "/api/v1/auth/sign-up",
      "/api/v1/auth/login",
      "/api/v1/auth/forgot-password",
      "/api/v1/auth/reset-password",
    ],
  })
);

api.post("/api/v1/auth/sign-up", auth.signUp);
api.post("/api/v1/auth/login", auth.login);
api.get("/api/v1/profile", async (req, res) => {
  try {
    let user = null;
    user = await userStudent.getUserByEmail(req.body.email);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server error");
  }
});

app.post("/recipes", courses.create);
app.get("/recipes", courses.getAll);
app.get("/recipes/:id", courses.getOne);
app.put("/recipes/:id", courses.updateOne);
app.delete("/recipes/:id", courses.deleteOne);

app.listen(process.env.PORT, (err) => {
  if (err) return console.log(err);

  console.log(`Server successfully started on port ${process.env.PORT}`);
});
