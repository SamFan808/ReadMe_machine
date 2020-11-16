const inquirer = require("inquirer");
const fs = require("fs");
const util = require("generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project",
    },
    {
      type: "input",
      name: "install",
      message: "Please enter installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please enter contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Please enter test instructions",
    },
    {
      type: "rawlist",
      name: "license",
      message: "Please select the license type",
      choices: [
        "MIT",
        "Apache-2.0",
        "CCBYSA4",
        "GPL-3.0",
        "BSD-2-Clause",
        "BSD-3-Clause",
        "BSD-4-Clause",
      ],
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username",
    },
    {
      type: "input",
      name: "email",
      message:
        "Please enter your email, I will contact you if you have any questions",
    },
  ]);

questions();

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
