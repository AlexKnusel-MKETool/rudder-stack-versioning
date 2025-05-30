# RudderStack Transformations Repository

This repository is designed for storing custom transformation scripts and shared libraries for use with RudderStack. It provides a structured layout for managing, testing, and deploying transformations.

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
- **language**: Language used (typically "javascript", but can also be "pythonfaas").
- **description**: Short description of the transformation.
- **test-input-file**: Path to the input test data.
- **expected-output**: Path to the expected output for the test.

The `libraries` array lists shared libraries that can be used by transformations. Each entry should specify the library file and a name:

```
{
  "file": "libs/<library-file>.js",
  "name": "<Library Name>"
}
```

## Folder Details

- **transformations/**: Contains JavaScript files implementing each transformation.
- **libs**: Contains reusable JavaScript libraries for use in transformations.
- **tests**: For each transformation, there is a subfolder containing input and expected output JSON files for automated testing.

## Development
- Use `npm run lint` to check code style with ESLint.
- Use `npm run format` to auto-format code with Prettier.
- CI workflows in `.github/workflows/` ensure code quality and automate publishing.
