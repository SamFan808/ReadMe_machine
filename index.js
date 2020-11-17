const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
const { clear } = require("console");
const { doesNotMatch } = require("assert");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
      validate: (response) =>
        response === "" ? console.log("Title cannot be left blank") : true,
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project",
      validate: (response) =>
        response === ""
          ? console.log("Description cannot be left blank")
          : true,
    },
    {
      type: "input",
      name: "install",
      message: "Please enter installation instructions",
      validate: (response) =>
        response === ""
          ? console.log("Install instructions cannot be left blank")
          : true,
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information",
      validate: (response) =>
        response === ""
          ? console.log("Usage information cannot be left blank")
          : true,
    },
    {
      type: "input",
      name: "contribution",
      message: "Please enter contribution guidelines",
      validate: (response) =>
        response === ""
          ? console.log("Contribution details cannot be left blank")
          : true,
    },
    {
      type: "input",
      name: "test",
      message: "Please enter test instructions",
      validate: (response) =>
        response === ""
          ? console.log("Test instructions cannot be left blank")
          : true,
    },
    {
      type: "list",
      name: "license",
      message: "Please select the license type",
      choices: [
        "MIT",
        "Apache-2.0",
        "CCBYSA4",
        "GPLv2",
        "GPLv3",
        "BSD-2-Clause",
        "BSD-3-Clause",
        "BSD-4-Clause",
        "LGPLv3",
      ],
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username",
      validate: (response) =>
        response === "" ? console.log("Username cannot be left blank") : true,
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
      validate: (response) =>
        response === "" ? console.log("Email cannot be left blank") : true,
    },
  ]);

questions()
  .then((data) => writeFileAsync("ReadMe.md", generateMarkdown(data)))
  .then(() => console.log("Successfully written to ReadMe.md"))
  .catch((err) => console.error(err));

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
