# Fitness Tracking App - Development Setup Guide

## Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Git**: Latest version
- **VS Code**: Recommended IDE

## Quick Start

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd Hackathon-frontend

# Install dependencies
npm install

# Set up git hooks
npm run prepare
```

### 2. Environment Configuration

```bash
# Create environment file from template
cp .env.example .env

# Edit .env with your actual values
# VITE_API_BASE_URL=https://your-api-url.com
# VITE_FIREBASE_API_KEY=your_actual_api_key
# ... etc
```

### 3. VS Code Setup

Install recommended extensions when prompted, or manually install:

- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense
- Error Lens

### 4. Verify Setup

```bash
# Check linting
npm run lint

# Check formatting
npm run format:check

# Start development server
npm run dev
```

## Development Workflow

### Daily Development

```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name

# Start development server
npm run dev

# Make your changes...

# Before committing (automatic via pre-commit hook):
# - Code will be formatted with Prettier
# - ESLint will fix auto-fixable issues

# Commit and push
git add .
git commit -m "feat: your descriptive commit message"
git push origin feature/your-feature-name
```

### Code Quality Commands

```bash
# Lint and fix issues
npm run lint:fix

# Format all files
npm run format

# Clean build artifacts
npm run clean

# Analyze bundle size
npm run analyze
```

### Pre-commit Hooks

The following checks run automatically before each commit:

1. **ESLint**: Fixes auto-fixable issues and reports errors
2. **Prettier**: Formats all code files
3. **Lint-staged**: Only checks modified files for speed

## Project Structure

```
Hackathon-frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   ├── Modal/
│   │   └── Tooltip/
│   ├── features/           # Feature-specific code
│   │   ├── workout/
│   │   ├── nutrition/
│   │   └── progress/
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API calls and external services
│   ├── utils/              # Utility functions
│   ├── constants/          # App constants
│   └── assets/             # Static assets
├── public/                 # Public assets
├── .vscode/               # VS Code settings
├── .husky/                # Git hooks
├── CODING_STANDARDS.md    # Team coding guidelines
└── SETUP.md              # This file
```

## Common Issues & Solutions

### ESLint Errors

```bash
# Auto-fix most ESLint issues
npm run lint:fix

# Check specific file
npx eslint src/components/YourComponent.jsx --fix
```

### Prettier Formatting

```bash
# Format specific file
npx prettier --write src/components/YourComponent.jsx

# Check if file needs formatting
npx prettier --check src/components/YourComponent.jsx
```

### Tailwind CSS Not Working

1. Ensure Tailwind CSS extension is installed
2. Check `tailwind.config.js` content paths
3. Restart VS Code and dev server
4. Clear cache: `npm run clean`

### Git Hooks Not Running

```bash
# Reinstall hooks
rm -rf .husky
npm run prepare

# Make hooks executable (if on macOS/Linux)
chmod +x .husky/pre-commit
```

## Team Collaboration

### Pull Request Process

1. **Create Feature Branch**: `feature/workout-timer`
2. **Develop & Test**: Ensure all checks pass locally
3. **Create PR**: Use the PR template
4. **Code Review**: Address feedback
5. **Merge**: Squash merge preferred

### Branch Naming Convention

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `hotfix/critical-issue` - Critical production fixes
- `docs/update-description` - Documentation updates
- `refactor/component-name` - Code refactoring

### Commit Message Format

```
type(scope): description

feat(workout): add timer functionality
fix(nutrition): resolve calorie calculation
docs(readme): update setup instructions
style(components): improve responsive design
refactor(api): extract common request logic
test(workout): add unit tests for timer
```

## Performance Optimization

### Bundle Analysis

```bash
# Generate bundle report
npm run analyze

# Check for:
# - Large dependencies
# - Duplicate packages
# - Unused code
```

### Image Optimization

- Use WebP format when possible
- Implement lazy loading
- Compress images before adding to repo
- Use responsive images with srcset

### Code Splitting

- Lazy load route components
- Split vendor bundles
- Use React.memo for expensive components
- Implement virtual scrolling for large lists

## Troubleshooting

### Node Version Issues

```bash
# Check current version
node --version

# Install correct version (use nvm)
nvm install 18
nvm use 18
```

### Package Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

---

**Need Help?** Check the [Coding Standards](./CODING_STANDARDS.md) or reach out to the team lead. 