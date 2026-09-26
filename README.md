# Jessica Eberle — Portfolio

Personal portfolio site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Structure

- `src/pages/index.astro` — landing page
- `src/pages/research/` — Research overview + topic pages (Cephalopods, Microbiology, …)
- `src/pages/at-sea/` — At-Sea Operations overview + role pages (Science Coordinator, Science Manager, Marine Technician, Scientist)
- `src/pages/data-visualization/` — Data viz overview + project pages, each linking to a GitHub repo
- `src/pages/photography/` — Photo gallery, sourced automatically from `src/assets/photography/`
- `src/data/site.js` — **edit this file** to update nav labels, topics, roles, projects, and page text (marked `TODO`)

## Adding photos

Drop image files into `src/assets/photography/` and commit them — the gallery page picks them up
automatically, no code changes required. See [src/assets/photography/README.md](src/assets/photography/README.md).

## Local development

```sh
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Deploying to GitHub Pages

1. Create a GitHub repository and push this project to it (see commands below).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Edit `astro.config.mjs`:
   - If your repo is named `<your-username>.github.io`, set `site` to `https://<your-username>.github.io` and `base` to `/`.
   - Otherwise, keep `base: '/<repo-name>/'` and set `site` to `https://<your-username>.github.io`.
4. Push to `main` — the included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the site automatically.

```sh
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Installs dependencies                         |
| `npm run dev`       | Starts local dev server at `localhost:4321`   |
| `npm run build`     | Builds the production site to `./dist/`       |
| `npm run preview`   | Previews the build locally before deploying   |


## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
