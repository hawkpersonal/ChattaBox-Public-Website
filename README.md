# Chattabox Public Website

Marketing website for Chattabox - A friendly voice companion for older adults.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn-ui** components
- **React Router** for navigation

## Getting Started

### Prerequisites

- Node.js 18+ (or use Bun)
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
chattabox-website/
├── public/
│   └── images/          # Images and assets
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Page sections (Hero, Features, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── pages/           # Page components
│   ├── lib/             # Utilities
│   └── index.css        # Global styles
└── package.json
```

## Design System

The website uses a warm, minimal design palette:

- **Backgrounds**: #F9F8F4 (paper base), #EFEDE5 (alt section)
- **Accent**: #C06040 (terracotta)
- **Text**: #1B1B1A (primary), #5F5B55 (secondary), #8A857E (muted)
- **Borders**: #E6E2DA, #DED9D0
- **Typography**: Fraunces (serif headings), Inter (sans-serif body)

## License

Copyright © 2024 Chattabox. All rights reserved.
