// TODO: Include packages needed for this application

import inquirer from "inquirer";
import fs from 'fs';
import colors from 'colors';


// // TODO: Create an array of questions for user input


const questions = [
    {
        type: 'input',
        name: 'title',
        message: colors.green('What is the title of your project?')
    },
    {
        type: 'input',
        name: 'description',
        message: colors.green('Write a concise description that fully explains your project.')
    },

    {
        type: 'input',
        name: 'installation',
        message: colors.white('Write instructions for installation.')
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.white('Specify the general and specific usage of your project.')
    },
    {
        type: 'input',
        name: 'contributing',
        message: colors.blue('How can contributors get involved in your project?')
    },
    {
        type: 'input',
        name: 'tests',
        message: colors.blue('What type of tests has your project gone through?')
    },
    {
        type: 'list',
        name: 'license',
        message: 'Specify what type of license you used for this project.',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'Boost Software License 1.0',
            'Mozilla Public License 2.0'
        ]
    },
    {
        type: 'input',
        name: 'questions1',
        message: colors.magenta('Write your GitHub name so contributors can ask you questions.')
    },
    {
        type: 'input',
        name: 'questions2',
        message: colors.magenta('Write your email address so contributors can ask you questions.')
    }
];

function generateREADME(answers) {
    return `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, check out my [GitHub repository](https://github.com/${answers.questions1}) or send me an email at ${answers.questions2}.
`;
}




// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`${fileName} has been created!`);
    });
}

// // // TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile('README.md', readmeContent);
    });
}

// // // Function call to initialize app
init();
