// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the project?',
    'Please describe the project.',
    'What are the steps required to install your project?',
    'Provide instructions and examples for use.',
    'List your collaborators, if any, with links to their GitHub profiles.',
    'Does this project have a license?',
    'Does this have any test? If so write the test instructions',
    'Type in your Github username.',
    'What is your email address?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const READMEContent =
   `# ${data.project}

## Description
${data.description}

## Table of Contents
- [Installation](#installation) // Fixed typo here
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Github](#github)
- [Email Address](#email-address)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## Credits
    ${data.credits}
    
## License
    ${data.license}
    
## Github
    ${data.github}

## Email Address
    ${data.email}
    `;

    fs.writeFile(fileName, READMEContent, (error) => {
        if (error) {
            console.log('Error has occurred!')
        } else {
            console.log('No errors detected.')
        }
    });
};


// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'project',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'credits',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'email',
            },
        ]).then((response) => {
            console.log(response);
            writeToFile('README.md', response);
        });
};

// Function call to initialize app
init();

