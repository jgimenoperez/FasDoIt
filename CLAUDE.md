# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Installation & Development
- `npm install` or `yarn install` - Install project dependencies
- `npm run dev` or `yarn dev` - Start development server with Turbopack (port 3000)
- `npm run build` or `yarn build` - Build application for production
- `npm start` or `yarn start` - Start production server
- `npm run lint` or `yarn lint` - Run ESLint for code quality

## Architecture Overview

This is a Next.js 15 application using the App Router pattern, built as a company website for "FASTDOIT" - a renovation service company.

### Technology Stack
- **Framework**: Next.js 15.4.3 with React 19
- **TypeScript**: Full TypeScript support with strict configuration
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components
- **Build Tool**: Turbopack for fast development builds
- **Icons**: Lucide React icon library
- **Font**: Geist font family (sans and mono variants)

### Project Structure
- **App Router**: Uses Next.js 13+ app directory structure
- **Components**: 
  - `src/components/ui/` - Reusable UI components using shadcn/ui patterns
  - `src/components/` - Page-specific components (Header, Footer, sections)
- **Styling**: Custom CSS variables for theming with dark mode support
- **Path Aliases**: `@/` mapped to `src/` directory for clean imports

### Key Configuration Files
- **next.config.ts**: Basic Next.js configuration (currently minimal)
- **tailwind.config.js**: Extensive Tailwind customization with CSS variables, dark mode, and animations
- **tsconfig.json**: TypeScript configuration with strict settings and path mapping
- **eslint.config.mjs**: ESLint configuration extending Next.js recommended rules

### Component Architecture
- Uses shadcn/ui pattern with `cn()` utility for class merging (clsx + tailwind-merge)
- Button component uses class-variance-authority for variant management
- All components are TypeScript with proper prop typing
- Components follow composition patterns with Radix UI primitives

### Styling System
- CSS custom properties for consistent theming
- Support for light and dark modes via CSS classes
- Extensive color palette with semantic naming
- Custom animations and transitions
- Responsive design with mobile-first approach

### Page Structure
The main page (`src/app/page.tsx`) is a single-page application with sections:
- Hero section with company branding
- Services, Projects, About, and Contact sections
- Header with navigation and Footer components

## Development Notes
- The application appears to be a business website for a renovation company
- Spanish content suggests target market is Spanish-speaking
- Uses modern React patterns (functional components, hooks)
- All styling uses Tailwind CSS classes with custom design tokens
- TypeScript is configured with strict mode for better type safety