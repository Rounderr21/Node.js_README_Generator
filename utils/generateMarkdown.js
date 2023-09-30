// Function to render a license badge
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',

    };

    if (badges[license]) {
      return `${badges[license]}`;
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
      return `Documentation on the current license being used is located here: ${licenseLinks[license]}`;
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
  const markdownSection = renderLicenseSection(data.license);
  const badge = renderLicenseBadge(data.license);
  const badgeImage = `<img src="${badge}" alt="License Badge" />`;

  return { markdownSection, badgeImage };
}

module.exports = generateMarkdown;
