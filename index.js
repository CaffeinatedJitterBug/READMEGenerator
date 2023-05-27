// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: CheckboxPrompt } = require('inquirer/lib/prompts/checkbox');
// TODO: Create an array of questions for user input
const questions = [
    "What do you want to call your project?", 
    "Please write a short description of your project.", 
    "What would you like to put into your table of contents? (Press ENTER after each item. Input 'done' when finished)", 
    "What are the steps required to install your project?", 
    "What are the steps to use your project?", 
    "Who were your collaboratos? (Write the name of each collaborator and their github link if they have one)",  
    "What license is applied to your project?", 
    "What badge(s) do you want to apply to your project?", 
    "What features does your project have?", 
    "How can other developers contribute to this project?" 
    ]

let string = "";
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'project-name'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'contents'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'credits'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'license'
            },
            {
                type: 'checkbox',
                message: questions[7],
                name: 'badges'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'features'
            },
            {
                type: 'input',
                message: questions[9],
                name: 'contributions'
            }
        ])
}

// Function call to initialize app
init();
