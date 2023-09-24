
function renderLicenseBadge(license) {
  if (license) {

    const badges = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',

    };


    if (badges[license]) {
      return `![License](${badges[license]})`;
    }
  }


  return '';
}


function renderLicenseLink(license) {
  if (license) {

    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',

    };


    if (licenseLinks[license]) {
      return `[License Information](${licenseLinks[license]})`;
    }
  }

  return '';
}


function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [License](#license)

## Description
${data.description}

## License
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
