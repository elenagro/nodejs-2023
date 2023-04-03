// let operacija = "minus";

// if (operacija == "minus") {
//   console.log("odzemanje");
// } else if (operacija == "plus") {
//   console.log("dodavanje");
// } else if ("mnozenje") {
//   console.log("mnozenje");
// } else if (operacija == "delenje") {
//   console.log("delenje");
// }

// switch (operacija) {
//   case "plus":
//     console.log("dodavanje");
//     break;
//   case "minus":
//     console.log("odzemanje");
//     break;
//   case "mnozenje":
//     console.log("mnozenje");
//     break;
//   case "delenje":
//     console.log("delenje");
//     break;
// }

// let result = {
//   plus: () => {
//     return console.log("dodavanje");
//   },
//   minus: () => {
//     console.log("odzemanje");
//   },
// };

// let rezultat = result[operacija]();
// console.log(rezultat);

const fs = require("fs");
const http = require('http');
// const server = require("./server");

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const render = async (page, data) => {
  let content = await fileRead(`./${page}.html`);
  return content.replace("{{res}}", data);
};

console.log('Server started...');
server.listen(8080)