// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the project?',
    'Please describe the project.',
    'Does this project have a license?',
    'Type in your Github username.',
    'What is your email address?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const READMEContent =
   `# ${data.project}
    # Description
    ${data.description}
    # Table of Contents
    - [Top of page](#top-of-page)
    - [Description](#description)
    - [License](#license)
    - [Github](#github)
    - [Email Address](#email-address)
    
    ## Top of page
    ${data.project}
    
    ## Description
    ${data.description}
    
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
                name: 'license',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'email',
            },
        ]).then((response) => {
            console.log(response);
            writeToFile('README.md', response);
        });
};

// Function call to initialize app
init();

