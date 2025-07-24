# Personal Portfolio

[![Live Site](https://img.shields.io/badge/demo-online-brightgreen)](https://seanandrewbarry.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

This repository contains the source code for my personal portfolio site built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). The application showcases projects, a blog, and contact information using a modern React stack.

## Features

- **React + Vite** for fast development and build performance
- **React Router** for client-side navigation between pages
- **Tailwind CSS** for utility‑first styling
- **Reusable components** for sections like the hero, skills list, projects, and contact form
- **Blog posts** stored in `src/data/posts.js`

## Getting Started

Install dependencies with npm:

```bash
npm install
```

Start the server:

```bash
npm run start
```

Open `http://localhost:5000` in your browser to view the site.

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the linter to check code quality:

```bash
npm run lint
```

## Project Structure

```
public/          Static assets
src/
  assets/        Images and media used in the site
  components/    Reusable React components
  data/          Static data, such as blog post content
  layouts/       Layout wrappers for pages
  pages/         Route components (Home, About, Projects, Blog, Contact)
  index.css      Tailwind CSS entry point
  App.jsx        Application routes
```

## Tailwind Configuration

Tailwind CSS is configured via `tailwind.config.js` and processed with PostCSS (see `postcss.config.js`). Adjust these files to customize your design system.

---

Feel free to use this project as a starting point for your own portfolio or React experiments.
