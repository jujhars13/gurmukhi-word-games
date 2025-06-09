# Gurmukhi Word Games

An interactive application for learning Gurmukhi script through fun word games. This project is built with Vue.js and Bootstrap.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The deployment is handled by a GitHub Actions workflow located in `.github/workflows/deploy.yml`.

### Manual Deployment

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to the `gh-pages` branch
3. Your site will be available at `https://your-username.github.io/gurmukhi-word-games/`

### Local Preview of Production Build

To preview the production build locally:

```sh
npm run build
npm run preview
```

### Customizing the Deployment

If you need to customize the deployment process, you can:

1. Edit the `.github/workflows/deploy.yml` file to modify the GitHub Actions workflow
2. Update the base URL in `vite.config.ts` if you're deploying to a different location

## Generating images

```bash
OPENAI_API_KEY=$(< ~/.secrets/jujhar/openai-key) ANIMAL=aardvark; echo "A cartoon $ANIMAL on a white background" | tee | dall-e-cli --pipe --size 1024x1024 --quality standard --download ./; mv *.png ../${ANIMAL}.png
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
