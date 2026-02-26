# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (http://localhost:3000)
- **Build**: `npm run build`
- **Start production**: `npm run start`
- **Lint/format check**: `npm exec -- ultracite check`
- **Lint/format fix**: `npm exec -- ultracite fix`

No test framework is configured yet.

## Architecture

Next.js 16 app using the App Router (`app/` directory) with React 19, TypeScript, and Tailwind CSS v4. React Compiler is enabled via `babel-plugin-react-compiler` in `next.config.ts`.

Path alias `@/*` maps to the project root.

## Code Quality

Ultracite (Biome-based) handles all linting and formatting. Config extends `ultracite/biome/core` and `ultracite/biome/next` in `biome.jsonc`. lint-staged runs `ultracite fix` on commit for JS/TS/JSON/CSS/MD files. See `AGENTS.md` for detailed coding standards.

## Styling

Tailwind CSS v4 via PostCSS. CSS variables for theme colors are defined in `app/globals.css`. Fonts: Geist Sans and Geist Mono loaded via `next/font/google`.
