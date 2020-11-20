// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Project Name: ${data.title}
![license badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue)

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)

2. [Usage](#usage)

3. [License](#license)

4. [Contributing](#contributing)

5. [Testing](#testing)

6. [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

Licensed under: ${data.license} license

## Contributing

${data.contribution}

## Testing

${data.test}

## Questions

GitHub Repository:

http://github.com/${data.username}

For any questions, please contact me at ${data.email}`;
}

module.exports = generateMarkdown;
