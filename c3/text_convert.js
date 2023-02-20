// const b = 25;
// const c = 55;

// const test_funkcija = (a, b) => {
//   return a + b;
// };

// module.exports = { b, c, test_funkcija };

const firstLetterUppercase = (text) => {
  returnText = text.charAt(0).toUpperCase() + text.slice(1, text.length);
  return returnText;
};

const textStats = (text) => {
  if (typeof text !== "string") return;

  let output = {
    bukvi: 0,
    zborovi: 0,
    recenici: 0,
    povekeOd5: 0,
    pomalkuOd5: 0,
    ednakvoNa5: 0,
  };

  output.bukvi = text.length;
  output.zborovi = text.split(" ").length;
  // let recenici = text.split(".");
  // let recenici2;
  // for (let i = 0; i < recenici.length; i++) {
  //     recenici2[i] = recenici
  // }
  output.recenici = text.split(".").length;

  let zborovi = text.split(" ");

  for (let zbor of zborovi) {
    if (zbor.length === 5) output.ednakvoNa5++;
    if (zbor.length > 5) output.povekeOd5++;
    if (zbor.length < 5) output.pomalkuOd5++;
  }
  //   for (let i = 0; i < zborovi.length; i++) {
  //     if (zbor[i].length === 5) output.ednakvoNa5++;
  //     if (zbor[i].length > 5) output.povekeOd5++;
  //     if (zbor[i].length < 5) output.pomalkuOd5++;
  //   }

  return output;
};

module.exports = {
  firstLetterUppercase,
  textStats,
};
