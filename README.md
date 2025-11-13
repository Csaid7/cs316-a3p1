# Weather Dashboard - React Version

A single-page weather application built with React that displays real-time weather data from the Tempest Weather API.

## About This Project

This is Assignment 3 Part 1 for CS316, rebuilding the weather dashboard from Assignment 2 using React instead of vanilla JavaScript. This project demonstrates:

- **React fundamentals**: Components, hooks (useState, useEffect), and JSX
- **REST API integration**: Fetching and displaying data from external APIs
- **Modern JavaScript**: async/await, ES6+ features
- **Component-based architecture**: Reusable UI components

## What I'm Learning

- How React's component-based approach simplifies building complex UIs
- Using React hooks to manage state and side effects
- The difference between vanilla JavaScript DOM manipulation and React's declarative approach
- How to structure a React application with reusable components
- Working with the `.map()` method to dynamically generate components from data

## Technologies Used

- **React 18** with Vite
- **Semantic UI React** for styling
- **Tempest Weather API** for real-time weather data
- **JavaScript (ES6+)**

## Features

- Displays 10-day weather forecast
- Shows temperature, conditions, and precipitation for each day
- Automatically fetches data on page load using `useEffect()`
- Component-based architecture for clean, maintainable code

## Setup
```bash
npm install
npm run dev
```

## Comparison to Assignment 2

**Assignment 2 (Vanilla JS)**:
- Manual DOM manipulation with `document.createElement()`
- Manual event listeners and state management
- All logic in one file

**Assignment 3 (React)**:
- Declarative UI with JSX
- Automatic re-rendering when state changes
- Component-based structure for better organization
- Built-in state management with hooks

#Saidi Mpungu

## Challenges & Learning

The most challenging aspects of this project were:

**Understanding React State**: Coming from  JavaScript where variables are simple, learning that React state triggers re-renders and why we use `useState()` instead of regular variables took time to grasp. The key insight was realizing that state changes automatically update the UI without manual DOM manipulation.

**Mastering useEffect()**: Understanding when and why to use `useEffect()` was initially confusing. Learning that the empty dependency array `[]` prevents infinite loops by running the effect only once on component mount was a breakthrough moment. This is crucial for API calls in React.

These challenges helped me understand React's declarative approach and why it's more efficient than vanilla JavaScript for complex applications.
