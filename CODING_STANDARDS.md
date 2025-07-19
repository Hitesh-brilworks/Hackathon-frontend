# Fitness Tracking App - Coding Standards

## Table of Contents
- [Overview](#overview)
- [Code Formatting](#code-formatting)
- [React Best Practices](#react-best-practices)
- [State Management](#state-management)
- [File Organization](#file-organization)
- [Component Architecture](#component-architecture)
- [Styling Guidelines](#styling-guidelines)
- [Performance Guidelines](#performance-guidelines)
- [Accessibility](#accessibility)
- [Git Workflow](#git-workflow)

## Overview

This document outlines the coding standards and best practices for our fitness tracking application. Following these guidelines ensures consistency, maintainability, and team collaboration efficiency.

## Code Formatting

### Prettier Configuration
- **Line Length**: 100 characters maximum
- **Indentation**: 2 spaces (no tabs)
- **Quotes**: Single quotes for JavaScript, JSX
- **Semicolons**: Always required
- **Trailing Commas**: ES5 style

### ESLint Rules
All code must pass ESLint checks before committing. Key rules include:
- No console.log in production code (use console.warn for development)
- Prefer const over let, never use var
- Use template literals over string concatenation
- No unused variables (prefix with _ if intentionally unused)

## React Best Practices

### Component Definition
```jsx
// ✅ Good - Arrow function with proper naming
const UserProfile = ({ userId, onUpdate }) => {
  // Component logic
};

// ❌ Bad - Function declaration for components
function userProfile(props) {
  // Component logic
}
```

### Props and State
```jsx
// ✅ Good - Destructure props immediately
const WorkoutCard = ({ title, duration, intensity, onStart }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Component logic
};

// ❌ Bad - Using props object directly
const WorkoutCard = (props) => {
  return <div>{props.title}</div>;
};
```

### Component Structure
```jsx
const FitnessComponent = ({ prop1, prop2 }) => {
  // 1. Hooks (useState, useEffect, custom hooks)
  const [state, setState] = useState(initialValue);
  const customData = useCustomHook();
  
  // 2. Event handlers
  const handleClick = useCallback(() => {
    // Handler logic
  }, [dependencies]);
  
  // 3. Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // 4. Early returns
  if (loading) return <LoadingSpinner />;
  
  // 5. Main render
  return (
    <div className="fitness-component">
      {/* JSX content */}
    </div>
  );
};
```

## State Management

### Redux Toolkit Usage
```jsx
// ✅ Good - Use createSlice
const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setWorkouts: (state, action) => {
      state.workouts = action.payload;
    },
    updateWorkout: (state, action) => {
      const index = state.workouts.findIndex(w => w.id === action.payload.id);
      if (index !== -1) {
        state.workouts[index] = action.payload;
      }
    },
  },
});
```

### Local State Guidelines
- Use `useState` for component-specific state
- Use `useReducer` for complex state logic
- Prefer lifting state up over prop drilling
- Use Context for theme, auth, or deeply nested props

## File Organization

### Directory Structure
```
src/
├── components/           # Reusable UI components
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── button.scss
│   │   └── index.js     # Export file
├── features/            # Feature-specific components
│   ├── workout/
│   ├── nutrition/
│   └── progress/
├── hooks/               # Custom hooks
├── services/            # API calls and external services
├── utils/               # Utility functions
├── constants/           # App constants
└── assets/              # Static assets
```

### Naming Conventions
- **Components**: PascalCase (`WorkoutCard.jsx`)
- **Files/Folders**: camelCase (`workoutUtils.js`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Variables/Functions**: camelCase (`getUserData`)

### Import Organization
```jsx
// 1. React and external libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 2. Internal components
import Button from '../Button';
import Modal from '../Modal';

// 3. Services and utilities
import { fetchWorkouts } from '../../services/workoutService';
import { formatDuration } from '../../utils/timeUtils';

// 4. Styles
import './WorkoutCard.scss';
```

## Component Architecture

### Component Types
1. **Presentational Components**: Pure UI components without business logic
2. **Container Components**: Handle data fetching and state management
3. **Layout Components**: Define page structure and navigation
4. **Feature Components**: Domain-specific components with business logic

### Component Composition
```jsx
// ✅ Good - Composition pattern
const WorkoutPage = () => (
  <PageLayout>
    <WorkoutHeader />
    <WorkoutFilters />
    <WorkoutList />
    <WorkoutActions />
  </PageLayout>
);

// ❌ Bad - Monolithic component
const WorkoutPage = () => {
  // 200+ lines of mixed concerns
};
```

## Styling Guidelines

### Tailwind CSS Classes
```jsx
// ✅ Good - Organized class names
const WorkoutCard = () => (
  <div className="
    flex flex-col
    p-6 rounded-xl
    bg-white shadow-card
    hover:shadow-card-hover
    transition-shadow duration-200
  ">
    <h3 className="text-lg font-semibold text-neutral-900">
      {workout.title}
    </h3>
  </div>
);
```

### SCSS Organization
```scss
// ✅ Good - BEM methodology
.workout-card {
  @apply flex flex-col p-6 rounded-xl;
  
  &__header {
    @apply flex items-center justify-between mb-4;
  }
  
  &__title {
    @apply text-lg font-semibold text-neutral-900;
  }
  
  &--featured {
    @apply ring-2 ring-primary-500;
  }
}
```

### Responsive Design
```jsx
// ✅ Good - Mobile-first approach
<div className="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
">
```

## Performance Guidelines

### Code Splitting
```jsx
// ✅ Good - Lazy loading for routes
const WorkoutPage = lazy(() => import('../pages/WorkoutPage'));
const NutritionPage = lazy(() => import('../pages/NutritionPage'));
```

### Optimization Hooks
```jsx
// ✅ Good - Memoization for expensive calculations
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);

// ✅ Good - Callback memoization
const handleSubmit = useCallback((formData) => {
  onSubmit(formData);
}, [onSubmit]);
```

### Image Optimization
```jsx
// ✅ Good - Responsive images with lazy loading
<img 
  src={imageSrc}
  alt={altText}
  loading="lazy"
  className="w-full h-auto object-cover"
/>
```

## Accessibility

### Semantic HTML
```jsx
// ✅ Good - Semantic elements
<main>
  <section aria-labelledby="workout-heading">
    <h2 id="workout-heading">Today's Workouts</h2>
    <ul>
      <li>
        <button aria-describedby="workout-desc">
          Start Workout
        </button>
      </li>
    </ul>
  </section>
</main>
```

### ARIA Labels
```jsx
// ✅ Good - Descriptive labels
<button 
  aria-label="Start 30-minute cardio workout"
  onClick={handleStartWorkout}
>
  <PlayIcon />
</button>
```

## Git Workflow

### Commit Messages
```
feat: add workout progress tracking
fix: resolve nutrition calculation bug
docs: update API documentation
style: improve workout card responsive design
refactor: extract common form validation logic
```

### Branch Naming
- `feature/workout-timer`
- `fix/nutrition-calculator`
- `hotfix/login-issue`
- `docs/readme-update`

### Pull Request Guidelines
1. **Title**: Clear, descriptive summary
2. **Description**: What, why, and how
3. **Screenshots**: For UI changes
4. **Testing**: How to test the changes
5. **Breaking Changes**: Document any breaking changes

## Code Review Checklist

### Before Creating PR
- [ ] Code passes all ESLint rules
- [ ] Code is formatted with Prettier
- [ ] All tests pass
- [ ] No console.log statements in production code
- [ ] Responsive design tested on mobile/tablet
- [ ] Accessibility requirements met

### Review Focus Areas
- [ ] Code follows established patterns
- [ ] Performance implications considered
- [ ] Error handling implemented
- [ ] Component reusability
- [ ] Proper state management
- [ ] Clear naming conventions

---

**Remember**: These standards evolve with the team and project needs. Suggest improvements through team discussions and documentation updates. 