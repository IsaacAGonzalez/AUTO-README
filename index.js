// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "usrName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "usrEmail",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "prjName",
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "prjDescription",
  },
  {
    type: "list",
    message: "What type of license should your project have?",
    name: "prjLicense",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "cmdInstall",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "cmdTest",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repoInfo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributeInfo",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log("Success! Your README file has been created!")
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => writeToFile("README.md", response))
    .catch((Error) => console.log("Something went wrong! :("))
    .finally(() => console.log("Done!"))
};

// Function call to initialize app
init();
