
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
{
  type: "list",
  message: "Select a licence for your project",
  choices: ['none', 'MIT', 'Apache 2.0', 'Boost Software 1.0', 'Attribution 4.0 International'],
  name: "license",
},
{
type:"input",
message:"Enter project title",
name:'title',
},
{
  type: 'input',
  message: 'Provide a short description explaining the what, why, and how of your project.',
  name: 'description',
},
{
  type: 'input',
  message: 'what are the steps to install your project?',
  name: 'installation',
},
{
  type: 'input',
  message: 'list any collaborators, assets that need attribution, and links to tutorals used',
  name: 'credits',
},
{
  Type: 'input',
  message: 'if your project has a lot of features, list them here',
  name: 'features',
},
{
  Type: 'input',
  message: 'if you have created tests for your project, provide examples of how to run them',
  name: 'tests',
},
{
    Type: 'input',
    message: 'enter your GitHub user name',
    name: 'questions',
  },
])

.then(function(userInput){
  console.log(userInput);
  fs.writeFile("README.md", generateMarkdown(userInput),err =>
  err ? console.log(err) : console.log("You're a winner, baby!"))
})

function renderLicenseBadge(license) {
  if (license !== "none"){
    return`![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return ""
}

function renderLicenseLink(license) {
  if (license !== "none"){
    return`\n*[License](#license)\n`
  }
}

function renderLicenseSection(license) {
  if (license !== "none"){
    return`## License:
    This project is licensed under the ${license} license`;
  } return ""
}

function generateMarkdown(userInput) {
  console.log();
  return `# ${userInput.title}
  ${renderLicenseBadge(userInput.license)}
  ## Description: 
  ${userInput.description}
  ## Table of Contents: 
  * [installation](#installation)
  * [credits](#credits)
  * [features](#features)
  * [tests](#tests)
  ${renderLicenseLink(userInput.license)}
  ## Installation: 
  ${userInput.installation}
  ## Credits: 
  ${userInput.credits}
  ## Features: 
  ${userInput.features}
  ## Tests: 
  ${userInput.tests}
  ## Contact:
  ${userInput.questions}
  ${renderLicenseSection(userInput.license)}`;
}

module.exports = generateMarkdown;
