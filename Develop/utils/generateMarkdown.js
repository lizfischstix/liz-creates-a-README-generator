const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
{
  type: "list",
  message: "Select a licence for your project",
  choices: ['none', 'MIT License', 'Apache 2.0 License', 'Boost Software License 1.0', 'Attribution 4.0 International'],
  name: "license",
},

{
type:"input",
message:"Enter project title",
name:'title',
},
{
  Type: 'input',
  message: 'Provide a short description explaining the what, why, and how of your project.',
  name: 'description',
},

{
  Type: 'input',
  message: 'what are the steps to install your project?',
  name: 'installation',
},

{
  Type: 'input',
  message: 'list any collaborators, assets that need attribution, and links to tutorals used',
  name: 'credits',
},

{
  Type: 'input',
  message: 'if your project has a lot of features, list them here',
  name: 'features',
},
])
.then(function(userInput){
  console.log(userInput);
  fs.writeFile("README.md", generateMarkdown(userInput),err =>
  err ? console.log(err) : console.log('success!'))
})
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  console.log();
  return `# ${userInput.title}
  ## Description: ${userInput.decription}
  ## Installation: ${userInput.installation}
  ## Credits: ${userInput.credits}
  ## Features: ${userInput.features}
  ## Licence:
`;
}

module.exports = generateMarkdown;
