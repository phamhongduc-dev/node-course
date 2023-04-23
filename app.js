const getNotes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// customize yarg version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

// Challenge: add two new commands
// Create list command
yargs.command({
  command: "list",
  describe: "List your note",
  handler: function () {
    console.log("Listing out all notes");
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

// console.log(process.argv);
console.log(yargs.argv);
