# Josué Morales — personal portfolio

Live website: https://josue-1303.github.io/WebPage/

A responsive portfolio in English and Spanish, built with HTML, CSS, and vanilla JavaScript. It presents my studies, projects, work experience, photography, and contact details.

## Local preview

Run `python -m http.server 8765` in this directory and open http://localhost:8765. No build step or packages are required.

## Editing

- `index.html`: content, contact links, and paired `data-en` / `data-es` translations.
- `styles.css`: desktop and mobile layouts, including reduced motion support.
- `script.js`: saved language preference and Find me / Encuéntrame interaction.
- The arrow points to the center of the front row. Adjust `.find-marker` in `styles.css` to change its position relative to the photo.
- Original Markdown pages and photos are retained. The original introduction uses `/introduction/` to avoid conflicting with the new homepage.

## Deployment

GitHub Pages publishes through the existing repository configuration. Updates to `main` trigger deployment. Relative asset paths support the `/WebPage/` project URL. Google Fonts has local sans-serif fallbacks.
