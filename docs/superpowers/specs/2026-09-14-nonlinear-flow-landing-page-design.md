# Nonlinear Flow Landing Page Design

## Purpose

Create a lightweight, static first page for `nonlinearflow.com`. It introduces Nonlinear Flow as Pavan's one-person software workshop and makes room for present and future products.

## Brand Position

**Nonlinear Flow** is a one-person workshop for software, experiments, and unexpected directions. It is personal, curious, technical, restrained, and slightly unconventional. It is not presented as a team, research organization, AI consultancy, or venture studio.

Primary site copy:

> A one-person workshop for software, experiments, and unexpected directions.

Supporting copy uses first person: “I build small tools and follow interesting ideas until they become useful.”

## Page Structure

1. **Header** — wordmark, a small navigation label, and a restrained status mark.
2. **Hero** — large title, primary positioning statement, and a generative-looking nonlinear path. The line responds to pointer movement only as a subtle visual effect; it does not control navigation.
3. **Introduction** — a first-person explanation of the workshop.
4. **Work** — two product cards: Muffin and Surfer. Since product copy and public URLs are not available, the cards are marked “In progress” and use non-navigating links.
5. **Footer** — “Built by Pavan”, the current year, and an email/GitHub placeholder that is visibly marked for replacement.

## Visual Direction

- Warm off-white background (`#f4f1ea`) with near-black text (`#181817`).
- One muted red-orange accent (`#e65f3d`) used only for the line and small state indicators.
- Typography uses the system sans-serif stack so the page has no external runtime or font dependency.
- A continuous SVG path creates the central nonlinear movement. It must be visible without JavaScript; JavaScript only adds a small pointer-driven displacement.
- The layout uses responsive CSS. On narrow screens, the hero and cards stack and remain legible without horizontal scrolling.

## Technical Design

The deliverable has no build tooling or dependencies:

- `index.html` holds semantic content and the inline SVG.
- `styles.css` owns layout, typography, color, animation, focus treatments, and responsive behavior.
- `script.js` progressively enhances the SVG path and sets the copyright year.

All code uses plain HTML, CSS, and browser JavaScript so it can be deployed directly to GitHub Pages.

## Accessibility and Interaction

- Use semantic landmarks: `header`, `main`, `section`, `footer`.
- Give interactive links descriptive text and visible keyboard focus.
- Respect `prefers-reduced-motion`; path animation and pointer movement stop when it is enabled.
- SVG is decorative and hidden from screen readers.
- Page content, visual path, and product card titles render when JavaScript is unavailable.

## Verification

- A static Node test asserts the document’s required landmarks, heading, product names, CSS reduced-motion rule, and script reference.
- Run the test with Node before completion.
- Open the static page locally and inspect the responsive desktop and mobile layout in a browser before completion.
