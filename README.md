# RudderStack Transformations Repository

This repository is designed for storing custom transformation scripts and shared libraries for use with RudderStack. It provides a structured layout for managing, testing, and deploying transformations.

## Getting Started

### Prerequisites

- Install [node.js](https://nodejs.org/en/download)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AlexKnusel-MKETool/rudder-stack-versioning.git
   cd rudder-stack-versioning
   ```

2. Install dependencies (run this command from the folder the repository is in)
   ```bash
   npm install
   ```

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b your-feature-branch
   ```
2. Make your changes
   1. Add a new javascript file with transformation code to the `transformations` folder
   2. Add the specific test folder with the input and expected output to tests.
   3. Update meta.json with the name, description, etc. of the transformation.
3. Format your changes to meet formatting standards
   ```bash
   npm run format
   ```
4. Commit your changes
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```
5. Push you changes
   ```bash
   git push origin your-feature-branch
   ```
6. Make a pull request on GitHub from the branch you created to dev

## Repository Layout

```
.
├── meta.json                % Defines transformations and libraries
├── transformations/         % Transformation scripts (JavaScript)
├── libs/                    % Shared libraries for transformations
├── tests/                   % Test cases for each transformation
│   └── <transformation-name>-test/
│       ├── <transformation-name>-input.json
│       └── <transformation-name>-expected-output.json
├── .prettierrc              % Prettier configuration
├── eslint.config.js         % ESLint configuration
├── package.json             % Node.js dependencies and scripts
├── .github/workflows/       % CI workflows for linting and publishing
└── README.md                % This file
```

## meta.json Format

The `meta.json` file defines the transformations and libraries available in this repository.

Each transformation entry should have the following format:

```
{
  "file": "transformations/<transformation-script>.js",
  "name": "<Transformation Name>",
  "language": "javascript",
  "description": "<Short description>",
  "test-input-file": "./tests/<transformation-name>-test/<transformation-name>-input.json",
  "expected-output": "./tests/<transformation-name>-test/<transformation-name>-expected-output.json"
}
```

- **file**: Path to the transformation script.
- **name**: Human-readable name for the transformation.
- **language**: Language used (typically "javascript").
- **description**: Short description of the transformation.
- **test-input-file**: Path to the input test data.
- **expected-output**: Path to the expected output for the test.

The `libraries` array lists shared libraries that can be used by transformations. Each entry should specify the library file and a name:

```
{
  "file": "./libs/<library-script>.js",
  "name": "<Library Name>",
  "description": "<Short description>"
  "language": "javascript"
}
```

## Folder Details

- **transformations**: Contains JavaScript files implementing each transformation.
- **libs**: Contains reusable JavaScript libraries for use in transformations.
- **tests**: For each transformation, there is a subfolder containing input and expected output JSON files for automated testing.

## Development

- Use `npm run lint` to check code style with ESLint.
- Use `npm run format` to auto-format code with Prettier.
- CI workflows in `.github/workflows/` ensure code quality and automate publishing.
