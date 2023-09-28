// Function to render a license badge
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',

    };

    if (badges[license]) {
      return `The License badge is: (${badges[license]})`;
    }
  }

  // Returns nothing if left empty
  return '';
}

// Function to render a license link
function renderLicenseLink(license) {
  if (license) {
    const licenseLinks = {
      'MIT License': 'https://opensource.org/licenses/MIT',

    };

    if (licenseLinks[license]) {
      return `The license link is: (${licenseLinks[license]})`;
    }
  }

  // Returns nothing if left empty
  return '';
}

// Function to render the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `
${renderLicenseLink(license)}
    `;
  }

  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}`;
}

module.exports = generateMarkdown;
