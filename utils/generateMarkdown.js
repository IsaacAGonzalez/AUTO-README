// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'MIT':
      badge = `<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue"></a>`;
      break;
    case "Apache 2.0":
      badge = `<a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache_2.0-blue"></a>`;
      break;
    case "GPL 3.0":
      badge = `<a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue"></a>`;
      break;  
    case "BSD 3":
      badge = `<a href="https://opensource.org/licenses/BSD-3-Clause"><img src="https://img.shields.io/badge/License-BSD_3--Clause-blue"></a>`;
      break;  
    case "None":
      badge = null;
      break;
  } return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 style="text-align: center; border: none;">${data.prjName}</h1>
  <p style="text-align: center;">
    ${renderLicenseBadge(data.prjLicense)}
  </p>
  
  Written by: ${data.usrName}

  Contact me: ${data.usrEmail}
  
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  
  ## Description
  ${data.prjDescription}

  ## Installation
  In order to install and use make sure to initiate Node.js using: \`${data.cmdInstall}\`
  
  For testing purposes you can use: \`${data.cmdTest}\`

  ## Usage
  ${data.repoInfo}

  ## Credits
  ${data.contributeInfo}

  ## License
  ${renderLicenseSection(data.prjLicense)}

  ${renderLicenseLink(data.prjLicense)}


  `;
}

module.exports = generateMarkdown;
