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
  let licenseLink;
  switch (license) {
    case 'MIT':
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      licenseLink = "https://opensource.org/licenses/GPL-3.0";
      break;  
    case "BSD 3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;  
    case "None":
      badge = null;
      break;
  } return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This repository uses the ${license}. Use of this repository and all of it's content is subject to those specific rules.
  For more information regarding use please see the LICENSE file part of this repository or visit the link below for more information about the license and what you can and can't do with this code.
  - [Repository License Information](${renderLicenseLink(license)})
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.prjName}
  ${renderLicenseBadge(data.prjLicense)}
  
  Written by: [${data.name}](${data.usrName})
  
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Tests](#Tests)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Questions](#Questions)
  
  ## Description
  ${data.prjDescription}

  ## Installation
  In order to install and use make sure to initiate using: 
  \`\`\`
  ${data.cmdInstall}
  \`\`\`
  This will ensure that everything is setup correctly and the dependancies needed are in place.

  ## Tests
  For testing purposes you can use the following command:
  \`\`\`
  ${data.cmdTest}
  \`\`\`

  ## Usage
  ${data.repoInfo}

  ## Contributing 
  ${data.contributeInfo}

  ## License
  ${renderLicenseSection(data.prjLicense)}

  ## Questions?
  Contact me: 
  - Email: ${data.usrEmail}
  - Github: <a href="https://github.com/${data.usrName}"><img src="https://img.shields.io/badge/Profile-${data.usrName}-blue?logo=github"></a>

  Thanks for checkout out my code!
  `;
}

module.exports = generateMarkdown;
