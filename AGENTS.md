# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/`: Route-based pages (e.g., `index.js`, `about.js`).
- `static/`: Public assets served at site root.
- `gatsby-config.js`: Site/plugins config (includes `gatsby-plugin-gatsby-cloud` and example headers for `/about/`).
- `package.json`: Scripts, dependencies, Node engine (20.19.4).
- Recommended: add `src/components/` for reusable UI; keep files small and focused.

## Build, Test, and Development Commands
- `npm install`: Install dependencies.
- `npm run develop`: Start Gatsby dev server with hot reload.
- `npm run build`: Create production build.
- `npm run serve`: Serve the production build locally.
- `npm run clean`: Clear Gatsby caches.
- `npm run format`: Format with Prettier.
- `npm test`: Runs Jest test suite (React Testing Library configured; tests in `src/__tests__/`).

## Coding Style & Naming Conventions
- Formatting: Prettier enforced; 2-space indent. Run `npm run format` before PRs.
- React: Functional components; component files in `src/components/` using PascalCase (e.g., `NavBar.js`).
- Pages: Files in `src/pages/` map to routes; prefer kebab-case URLs (e.g., `blog-post.js` → `/blog-post`).
- Imports: Use ES modules (`import`/`export`). Keep relative paths tidy; create index files for folders when useful.

## Testing Guidelines
- Testing is already configured with Jest and React Testing Library (`jest.config.js`, `babel.config.js`, and existing test files). Add new tests using this setup.
- File pattern: `**/*.test.js` or `src/__tests__/*`.
- Scope: Smoke test top-level pages and any critical components.
- Run: `npm test` to execute the test suite (Jest is preconfigured).

## Commit & Pull Request Guidelines
- Commits: Imperative mood, concise subject (e.g., `fix: correct build on Node 18`).
- Branches: `feat/*`, `fix/*`, `chore/*` as appropriate.
- PRs: Include summary, rationale, screenshots for UI changes, and testing notes. Link related issues.

## Security & Configuration Tips
- Env: Use `.env.development` / `.env.production` for secrets; do not commit them.
- Headers/Auth: `gatsby-plugin-gatsby-cloud` sets example headers for `/about/`; adjust in `gatsby-config.js` before deploying.
