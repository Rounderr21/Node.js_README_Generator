
// Function to render a license badge
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Unlicense' : 'https://img.shields.io/badge/license-Unlicense-blue.svg',
      'GNU General Public License' : 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      'Apache License' : 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
      'Eclipse Public License' : 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
      'BSD3 License' : 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
      'Mozilla Public License' : 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
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
      'Unlicense' : 'http://unlicense.org/',
      'GNU General Public License' : 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache License' : 'https://opensource.org/licenses/Apache-2.0',
      'Eclipse Public License' : 'https://opensource.org/licenses/EPL-1.0',
      'BSD3 License' : 'https://opensource.org/licenses/BSD-3-Clause',
      'Mozilla Public License' : 'https://opensource.org/licenses/MPL-2.0'
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
