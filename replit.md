# Aditya Nirgude Portfolio Website

## Overview
A modern, interactive portfolio website showcasing Aditya Nirgude's expertise as a Software Developer and AI/ML Engineer. Built with React, TypeScript, and Tailwind CSS with full dark mode support and smooth animations.

## Recent Changes
- **Dec 2024**: Initial portfolio implementation with all MVP features
  - Hero section with animated role carousel
  - Experience timeline (Two Registers, Quant Masters)
  - Featured projects section (German Public Admin Automation, Literature Review Agent)
  - Skills matrix with categorized technologies
  - Education section (RPTU Kaiserslautern, Sinhgad Academy)
  - Publication spotlight
  - Contact form with validation
  - Dark/light theme toggle
  - CV download functionality

## Project Architecture

### Frontend (`client/src/`)
- **pages/portfolio.tsx**: Main portfolio page assembling all sections
- **components/**: Modular React components
  - `theme-provider.tsx` & `theme-toggle.tsx`: Dark mode implementation
  - `navigation.tsx`: Fixed navigation bar
  - `hero-section.tsx`: Animated hero with role carousel
  - `experience-section.tsx`: Interactive timeline
  - `projects-section.tsx`: Featured project cards
  - `skills-section.tsx`: Technology skill matrix
  - `education-section.tsx`: Education cards
  - `publication-section.tsx`: Academic publication
  - `contact-section.tsx`: Contact form with validation
  - `footer.tsx`: Site footer

### Backend (`server/`)
- **routes.ts**: API endpoints
  - `POST /api/contact`: Contact form submission
  - `GET /api/cv/download`: CV PDF download
- **storage.ts**: In-memory storage for contact messages

### Shared (`shared/`)
- **schema.ts**: TypeScript types and Zod schemas

## Key Technologies
- React 18 with TypeScript
- Tailwind CSS with custom design system
- Framer Motion for animations
- Shadcn UI components
- React Hook Form with Zod validation
- TanStack Query for data fetching
- Express.js backend

## User Preferences
- Dark theme as default preference
- Smooth animations and transitions
- Mobile-responsive design
- Professional, modern aesthetic

## Running the Project
The application runs on port 5000 using the "Start application" workflow (`npm run dev`).
