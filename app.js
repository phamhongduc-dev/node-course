const valigator = require('validator')
const getNotes = require('./notes.js')

const mes = getNotes()

console.log(mes);

const email = "phamgmail.com";
const url = "https://google.com";

console.log(valigator.isURL(url));