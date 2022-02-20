const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here

  let massiveStr = splitWords(expr);

  let massivNewStr = massiveStr.map((x) => decoz(x)).join(" ");

  return massivNewStr;

  function splitWords(str) {
    return str.split("**********");
  }

  function decoz(x) {
    let massiveSymbols = splitSymbols(x, 10);
    let correc = massiveSymbols.map((x) => decodeToMorse(x));
    return correc.join("");
  }

  function deleteNulls(a) {
    while (a[0] == 0) {
      a = a.slice(1);
    }
    return a;
  }

  function splitSymbols(word, leng) {
    if (word.length) {
      return [word.slice(0, leng), ...splitSymbols(word.slice(leng),leng)];
    } else {
      return [];
    }
  }
  function decodeToMorse(posl) {
    let correct = deleteNulls(posl);
    let ma = splitSymbols(correct, 2);
    let afk = ma.map((x) => (x === "10" ? "." : "-"));
    let pos = MORSE_TABLE[afk.join("")];
    return pos ? pos : "@";
  }
}


module.exports = {
  decode,
};
