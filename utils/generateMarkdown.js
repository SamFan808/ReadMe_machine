// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Project Name: ${data.title}
![license badge](https://img.shields.io/badge/license-${data.license}-blue)

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)

2. [Usage](#usage)

3. [License](#license)

4. [Contributing](#contributing)

5. [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## License

Licensed under: ${data.license} license

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

http://github.com/${data.username}
For any questions, please contact me at ${data.email}`;
}

module.exports = generateMarkdown;
