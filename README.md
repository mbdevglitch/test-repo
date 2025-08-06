# TypeScript Hello World

This is a simple TypeScript project that demonstrates a basic "Hello World" application. 

## Project Structure

```
typescript-hello-world
├── src
│   └── index.ts          # Entry point of the application
├── test
│   └── index.test.ts     # Tests for the application
├── .github
│   └── workflows
│       └── ci.yml        # GitHub Actions workflow for CI
├── package.json           # NPM configuration
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/typescript-hello-world.git
   cd typescript-hello-world
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Build

To build the project, run:
```
npm run build
```

### Test

To run the tests, use:
```
npm test
```

### Run

To run the application, execute:
```
npm start
```

## GitHub Actions

This project includes a GitHub Actions workflow that automatically builds and tests the application on push and pull request events. The workflow is defined in `.github/workflows/ci.yml`. 

## License

This project is licensed under the MIT License.