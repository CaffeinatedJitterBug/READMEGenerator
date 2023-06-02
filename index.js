// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    "What do you want to call your project?", 
    "Please write a short description of your project.", 
    "What are the steps required to install your project?", 
    "What are the usage instructions for your project?",
    "How can other developers contribute to this project?",
    "What tests can users use on your project?",
    "What license is applied to your project?",
    "What is your GitHub?",
    "What is your email?"
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const str = data.join('<br><br>');
    fs.writeFile(fileName, str, (err) =>
        err ? console.error(err) : console.log('README file generated successfully')
    );
}

// TODO: Create a function to initialize app
function init() {
    let string = "";
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'name'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contributions'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email'
            }
        ])
        .then((response) => {
            const defaultText = [
                "#", 
                "## Description", 
                "## Table of Contents<br>Installation<br>Usage<br>Contributing<br>Testing<br>License<br>Questions",
                "## Installation",
                "## Usage",
                "## Contributions",
                "## Testing",
                "## License",
                "## Questions",
            ]

            const props = []
            const contentArray = []

            for (let ans in response) {
                props.push(response[ans])
            }

            const tempArray = []
            for (let x=0; x<9; x++) {
                if (x === 0) {
                    tempArray.push(defaultText[x], props[x])
                    contentArray.push(tempArray.join(' '))
                } else if (x === 1) {
                    contentArray.push(defaultText[x], props[x])
                }
                else if (x === 2) {
                    contentArray.push(defaultText[2])
                } else if (x === 8) {
                    contentArray.push(defaultText[x], props[x-1], props[x])
                } else {
                    contentArray.push(defaultText[x], props[x-1])
                }
            }
            writeToFile('README.md', contentArray)
        }); 
}

// Function call to initialize app
init();
