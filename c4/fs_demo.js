const fs = require("fs");
const path = require("path");

//Create a folder in the file system
// fs.mkdir(path.join(__dirname, "/test1"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder is created!");
// });

//create and write to file
//Also append to file
fs.writeFile(
  path.join(__dirname, "test1", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File was created and was written into...");
  }
);

fs.appendFile(
  path.join(__dirname, "test1", "hello.txt"),
  "I love node.js",
  (err) => {
    if (err) throw err;
    console.log("File was appended to...");
  }
);

fs.readFile(
  path.join(__dirname, "test1", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.rename(
  path.join(__dirname, "test1", "hello.txt"),
  path.join(__dirname, "test1", "hello_preimenuvan.txt"),
  (err) => {
    if (err) throw err;
    console.log("The file has been renamed...");
  }
);
