const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide your contribution guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "questions",
        message: "Enter what you would like to include in the questions section"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File");
        writeToFile("output/README.md", generateMarkdown({...responses}));
    });
};

// function call to initialize program
init();
