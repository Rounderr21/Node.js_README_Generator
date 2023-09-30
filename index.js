// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the project?',
    'Please write the description of the project.',
    'What are the steps required to install your project?',
    'Provide instructions and examples for use.',
    'List your collaborators, if any, with links to their GitHub profiles.',
    'Does this project have a license?',
    'Does this have any test? If so write the test instructions.',
    'Type in your Github username.',
    'What is your email address?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { markdownSection, badgeImage } = generateMarkdown(data);

    const READMEContent =
   `# ${data.project} ${badgeImage}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#quesetions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Tests
${data.test}
    
## License
The License that is being used for this readme file is the ${data.license}${markdownSection}

## Questions
If you have any issues please send me an email and I will get back to you as soon as I can.
Github: https://github.com/${data.github}
Email: ${data.email}
    `;

    fs.writeFile(fileName, READMEContent, (error) => {
      if (error) {
        console.log('Error has occurred!');
      } else {
        console.log('No errors detected.');
      }
    });
  }

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
                type: 'list',
                name: 'license',
                message: questions[5],
                choices: ['MIT License', 'Unlicense', 'GNU General Public License', 'Apache License', 'Eclipse Public License', 'BSD3 License', 'Mozilla Public License'],
            },
            {
                type: 'input',
                message: questions[6],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
            
        ]).then((response) => {
            //console.log(response);
            writeToFile('README.md', response);
        });
};

// Function call to initialize app
init();

