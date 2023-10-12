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
type:
}

])

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
function generateMarkdown(data) {
  console.log();
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
