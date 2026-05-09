# Pinrun Chen | Personal Homepage

[![Website](https://img.shields.io/badge/Website-william--1225.github.io-2d96bd)](https://william-1225.github.io/)
[![GitHub Pages](https://img.shields.io/github/deployments/William-1225/William-1225.github.io/github-pages?label=GitHub%20Pages)](https://william-1225.github.io/)
[![Last Commit](https://img.shields.io/github/last-commit/William-1225/William-1225.github.io)](https://github.com/William-1225/William-1225.github.io/commits/main)
[![License](https://img.shields.io/github/license/William-1225/William-1225.github.io)](LICENSE)

This repository hosts my personal homepage, built as a lightweight static site and deployed with GitHub Pages.

Live site: [william-1225.github.io](https://william-1225.github.io/)

## Overview

The homepage is designed as a clean personal profile for career, project, and education presentation. It includes bilingual content switching, dark mode, responsive navigation, and a timeline-style layout for structured experience sections.

## Sections

- About: short bio and profile highlights
- Career: internship and professional experience timeline
- Projects: featured projects, including the weekly competitor dealer network monitoring report
- Education: academic background timeline
- Report: interactive project report hosted under `report/`

## Recent Design Update

- Rebuilt Career, Projects, and Education as a lighter timeline layout
- Removed card borders from experience entries
- Simplified location text by removing the pin emoji
- Updated the project report link interaction
- Refined project date formatting for the dealer monitoring project

## Project Structure

```text
.
├── index.html              # Main homepage
├── report/                 # Interactive report page and report assets
├── static/                 # Legacy/static assets
├── contents/               # Legacy content files kept for reference
├── screenshot_full.png     # Homepage preview image
├── LICENSE
└── README.md
```

## Local Preview

Because the site is static, it can be previewed with any simple HTTP server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

The site is deployed through GitHub Pages from the `main` branch. After pushing changes to GitHub, Pages will rebuild and publish automatically.

```bash
git add .
git commit -m "Update homepage"
git push origin main
```

## Credits

The site started from a personal homepage template and has since been customized for my own profile, projects, and visual style.

## License

This project is licensed under the [MIT License](LICENSE).
