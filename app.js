const getNotes = require("./notes.js");
const chalk = require("chalk");

const mes = getNotes();
console.log(mes);

console.log(chalk.red.inverse.bold("Success...?"));
