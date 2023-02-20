// const { b, c, test_funkcija } = require("./text_convert.js");

// // const test_funkcija = require("./text_convert");

// console.log(b);
// console.log(c);
// console.log(test_funkcija(b, c));

// const test_funkcija = require("./text_convert")

// console.log(test_funkcija(20, 15));

const { firstLetterUppercase, textStats } = require("./text_convert");

const zdravo = "zdravo svetu ova e samo test.";

console.log(firstLetterUppercase(zdravo));

let primerText =
  "Zdravo Elena. Kako si? Gledam ne doagjas na predavanja. Si se zapustila! Jeeee";
console.log(textStats(primerText));
