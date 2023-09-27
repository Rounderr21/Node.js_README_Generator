
// Function to render a license badge
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    };


    if (badges[license]) {
      return `![License](${badges[license]})`;
    }
  }

//returns nothing if left empty
  return '';
}

// Function to render a license link
function renderLicenseLink(license) {
  if (license) {
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
    };

    if (licenseLinks[license]) {
      return `[License Information](${licenseLinks[license]})`;
    }
  }
//returns nothing if left empty
  return '';
}

// Function to render the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
    `;
  }

  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
