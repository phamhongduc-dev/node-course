const getNotes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// customize yarg version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      typr: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
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

yargs.parse();
