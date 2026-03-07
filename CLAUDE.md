# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gurmukhi Word Games — a Vue 3 + TypeScript SPA for learning Gurmukhi script through interactive games. Deployed to GitHub Pages at gurmukhi.har-rai.uk via `.github/workflows/deploy.yml`.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check (`vue-tsc`) then build for production
- `npm run lint` — runs oxlint then eslint sequentially (both with `--fix`)
- `npm run format` — prettier on `src/`
- `npm run type-check` — run `vue-tsc --build` standalone

No test framework is configured.

## Architecture

**Stack:** Vue 3 (Composition API with `<script setup>`), Vue Router, Bootstrap 5, Vite, TypeScript.

**Routing:** `src/router/index.ts` — each game has a route under `/games/<name>`. Views are lazy-loaded except HomeView.

**Pattern for adding a new game:**
1. Create game component in `src/components/<GameName>.vue` (all game logic lives here)
2. Create thin wrapper view in `src/views/<GameName>View.vue` that just renders the component
3. Add route in `src/router/index.ts`
4. Add card entry in `src/views/HomeView.vue` `wordGames` array

**Game data:** JSON files in `src/data/` — `animals.json` (animal name/gurmukhi/image triples), `akhar.json` (Gurmukhi alphabet grouped by lines with romanised equivalents).

**Static assets:** Animal images in `public/images/animals/`, game card images in `public/images/`. Images generated via dall-e-cli (see README).

**Path alias:** `@` maps to `src/` (configured in `vite.config.ts`).

**Base URL:** Set to `/` (deployed to apex of subdomain, not a subpath).

## Style

- Components use Vue 3 `<script setup lang="ts">` with Composition API
- Bootstrap 5 classes for layout and styling (no custom CSS framework)
- Gurmukhi text should use appropriate large font sizes for readability
