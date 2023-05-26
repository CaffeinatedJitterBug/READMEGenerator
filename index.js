// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: CheckboxPrompt } = require('inquirer/lib/prompts/checkbox');
// TODO: Create an array of questions for user input
const questions = [
    Text(name="name", message="What do you want to call your project?"), 
    Text(name="description", message="Please write a short description of your project."), 
    Text(name="contents", message="What would you like to put into your table of contents? (Press ENTER after each item. Input 'done' when finished)"), 
    Text(name="installation", message="What are the steps required to install your project?"), 
    Text(name="usage", message="What are the steps to use your project?"), 
    Text(name="credits", message="Who were your collaboratos? (Hit ENTER after writing the name of each collaborator and their github link if they have one. Input 'done' when finished)"),  
    Text(name="license", message="What license is applied to your project?"), 
    CheckboxPrompt(name="badge", message="What badge(s) do you want to apply to your project?"), 
    Text(name="feature", message="What features does your project have?"), 
    Text(name="contribute", message="How can other developers contribute to this project?"), 
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
