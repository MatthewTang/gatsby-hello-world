# Gatsby Hello World Starter

This is a Gatsby.js React static site generator application with a minimal hello-world setup. It includes basic pages, testing infrastructure with Jest, and code formatting with Prettier.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Setup and Dependencies

- **Node.js Version**: This project requires Node.js 20.x (specifically 20.19.4) as defined in `.nvmrc` and package.json engines
- **npm Version**: Requires npm 10.x (specifically 10.8.2) as defined in package.json engines
- **Use the correct Node version**: `nvm use` (if using nvm, otherwise ensure Node 20.19.4 is installed)
- **Install dependencies**: `npm install` -- takes 4 minutes. NEVER CANCEL. Set timeout to 8+ minutes.
  - **Lock file**: After initial `npm install`, you can use `npm ci` for clean installs
  - **If npm ci fails**: Use `npm install` to resync the lock file
  - Expect deprecation warnings - these are normal and do not affect functionality

### Build Commands (NEVER CANCEL - Set Long Timeouts)

- **Clean cache**: `npm run clean` -- instant, cleans .cache/, public/, and babel cache
- **Build production**: `npm run build` -- takes 2 minutes 20 seconds. NEVER CANCEL. Set timeout to 5+ minutes.
  - Creates optimized production build in `public/` directory
  - Uses `NODE_OPTIONS=--openssl-legacy-provider` for Node.js compatibility
- **Development server**: `npm run develop` -- takes 60 seconds to start. NEVER CANCEL. Set timeout to 3+ minutes.
  - Runs on http://localhost:8000/
  - GraphiQL available at http://localhost:8000/___graphql
  - Hot reloading enabled for development
- **Serve production build**: `npm run serve` -- takes 10 seconds to start
  - Runs on http://localhost:9000/
  - Serves the built production site

### Testing and Code Quality

- **Run tests**: `npm test` -- takes 1.7 seconds. Uses Jest with React Testing Library.
- **Format code**: `npm run format` -- takes 0.4 seconds. Uses Prettier with custom config.
- **Linting**: No linting is configured. ESLint dependencies exist but no lint script or config files are set up.

## Validation

### Manual Testing Requirements

**ALWAYS manually validate any changes by running the application and testing user scenarios:**

1. **Development workflow validation**:

   - Run `npm run develop` (wait 60+ seconds for startup)
   - Navigate to http://localhost:8000/
   - Verify the "Hello Gatsby!" heading displays with purple styling
   - Click the "about" link and verify navigation to /about/ works
   - Verify "about" page shows "about" text and "home" link
   - Click the "home" link to return to index page
   - Test GraphiQL interface at http://localhost:8000/___graphql

2. **Production build validation**:

   - Run `npm run build` (wait for completion - 2+ minutes)
   - Run `npm run serve`
   - Navigate to http://localhost:9000/
   - Test the same navigation flow as development
   - Verify all functionality works identically to development

3. **Code changes validation**:
   - Always run `npm test` after making changes
   - Always run `npm run format` before committing
   - Test both development and production builds if React/JSX code changes

### Common Issues and Solutions

- **Lock file sync errors**: If `npm ci` fails, use `npm install` instead
- **Build hangs**: Builds can take 2+ minutes - never cancel, wait for completion
- **Development server slow start**: Server takes ~60 seconds to start - wait for "You can now view..." message
- **Node compatibility**: All npm scripts use `NODE_OPTIONS=--openssl-legacy-provider` flag for compatibility

## Project Structure

### Key Directories and Files

```
gatsby-hello-world/
├── src/
│   ├── pages/          # Gatsby pages (index.js, about.js)
│   └── __tests__/      # Jest test files
├── static/             # Static assets (favicon.ico)
├── .cache/             # Gatsby cache (auto-generated, gitignored)
├── public/             # Build output (auto-generated, gitignored)
├── node_modules/       # Dependencies (gitignored)
├── gatsby-config.js    # Gatsby configuration
├── package.json        # Node.js project config with scripts
├── jest.config.js      # Jest testing configuration
├── babel.config.js     # Babel transpilation config
├── .prettierrc         # Prettier formatting config
└── .nvmrc             # Node version specification
```

### Current Pages

- **Home page** (`src/pages/index.js`): Purple-styled page with "Hello Gatsby!" heading and link to about page
- **About page** (`src/pages/about.js`): Simple page with "about" text and link back to home

### Testing Setup

- **Jest** with `jsdom` environment for React component testing
- **React Testing Library** for component interaction testing
- **@testing-library/jest-dom** for additional matchers
- Tests located in `src/__tests__/` directory
- Gatsby Link component is mocked for testing

## Common Development Tasks

### Adding New Pages

- Create new .js files in `src/pages/` directory
- Gatsby automatically creates routes based on file names
- Use `import { Link } from "gatsby"` for internal navigation

### Making Changes

- Always run tests first: `npm test`
- Make your changes to source files
- Format code: `npm run format`
- Test in development: `npm run develop`
- Test production build: `npm run build && npm run serve`
- Validate manually through browser testing

### Troubleshooting Build Issues

- Clean cache first: `npm run clean`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version matches `.nvmrc`: `node --version`
- Ensure all scripts complete - builds take 2+ minutes

## Reference Information

### Validated Command Outputs

#### Package.json Scripts

```json
{
  "build": "NODE_OPTIONS=--openssl-legacy-provider gatsby build",
  "develop": "NODE_OPTIONS=--openssl-legacy-provider gatsby develop",
  "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
  "start": "npm run develop",
  "serve": "NODE_OPTIONS=--openssl-legacy-provider gatsby serve",
  "clean": "gatsby clean",
  "test": "jest"
}
```

#### Dependencies Overview

- **gatsby**: ^3.4.1 (main framework)
- **react**: ^17.0.1
- **react-dom**: ^17.0.1
- **gatsby-plugin-gatsby-cloud**: ^2.4.1
- **Development**: Jest, Babel, Testing Library, Prettier

#### Build Timing Reference

- `npm install`: ~4 minutes (with warnings)
- `npm test`: ~1.7 seconds
- `npm run format`: ~0.4 seconds
- `npm run build`: ~2 minutes 20 seconds
- `npm run develop`: ~60 seconds to start
- `npm run serve`: ~10 seconds to start
- `npm run clean`: instant
