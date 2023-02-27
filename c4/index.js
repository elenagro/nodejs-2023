// const path = require("path");

// // Get the base filename
// console.log(__filename);
// console.log(path.basename(__filename));

// console.log(__filename.split("\\")[__filename.split("\\").length - 1]); // vo basename se naogja ovoj kod

// // Directory name
// console.log(path.dirname(__filename));
// console.log(__dirname);

// //File extension name
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).ext);

// // concatenate paths
// // ../c4/
// console.log(path.join(__dirname, "test", "hello.html"));

const fs = require("fs");
const path = require("path");

// promise
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile(
//       path.join(__dirname, "test", "iminja.txt"),
//       "Pero, Stanko",
//       (err) => {
//         if (err) return fail(err);
//         return success();
//       }
//     );
//   });
// };

// fileWrite();
// console.log('se izvrsi i ova');

const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(
      (filename,
      data,
      (err) => {
        if (err) return fail(err);
        return success();
      })
    );
  });
};

// fileWrite(path.join(__dirname, "test", "ocenki.txt"), "4, 5, 6, 7, 1, 2")
//   .then(() => {
//     console.log("SUCCESS!");
//     return fileWrite(
//       path.join(__dirname, "test", "boi.txt"),
//       "crvena, zholta, zelena"
//     );
//   })
//   .then(() => {
//     console.log("SUCCESS 2!");
//     return fileWrite(
//       path.join(__dirname, "test", "boi2.txt"),
//       "sina, crna, bela"
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("daaa");

// const fileRead = (filename) => {
//   return new Promise((success, fail) => {
//     fs.readFile(filename, "utf8", (err, data) => {
//       if (err) return fail(err);
//       return success(data);
//     });
//   });
// };

// fileRead(path.join(__dirname, "test", "boi2.txt"))
//   .then((data) => {
//     console.log("PROMISE RESOLVED");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED");
//     console.log(data);
//   });

//   (async () => {
//     try {
//     let ocenki = await fileRead(path.join(__dirname, 'test', 'ocenki.txt'))
//     console.log('ocenki: ', ocenki)} catch (err) {
//         console.log(err);
//     }
//   })
