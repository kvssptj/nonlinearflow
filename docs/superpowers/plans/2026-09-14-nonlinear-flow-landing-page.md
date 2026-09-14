# Nonlinear Flow Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, dependency-free static landing page for Nonlinear Flow that is ready for GitHub Pages.

**Architecture:** Semantic HTML contains the workshop copy and decorative SVG. CSS supplies the responsive editorial layout, monochrome-like palette, path animation, focus handling, and reduced-motion fallback. Small browser JavaScript adds a pointer-responsive transform to the decorative path and writes the footer year; the content works without it.

**Tech Stack:** HTML5, CSS3, browser JavaScript, Node.js built-in `node:test` and `node:assert`.

**Spec:** `docs/superpowers/specs/2026-09-14-nonlinear-flow-landing-page-design.md`

## Global Constraints

- Use plain HTML, CSS, and JavaScript only; add no package or external runtime dependency.
- Use the positioning copy: “A one-person workshop for software, experiments, and unexpected directions.”
- Use the warm off-white `#f4f1ea`, near-black `#181817`, and muted red-orange `#e65f3d` palette.
- Respect `prefers-reduced-motion` for all decorative animation and interaction.
- Keep the SVG decorative with `aria-hidden="true"`.
- Product cards for Muffin and Surfer must be non-navigating and marked “In progress”.

---

### Task 1: Create a verified static page shell

**Files:**
- Create: `tests/landing-page.test.mjs`
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`

**Interfaces:**
- Consumes: Static files in the repository root.
- Produces: `node --test tests/landing-page.test.mjs` validates the required page contract.

- [ ] **Step 1: Write the failing test**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('landing page exposes the workshop identity and product cards', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /<main/);
  assert.match(html, /<h1[^>]*>Nonlinear Flow<\/h1>/);
  assert.match(html, /A one-person workshop for software, experiments, and unexpected directions\./);
  assert.match(html, /Muffin/);
  assert.match(html, /Surfer/);
  assert.match(html, /styles\.css/);
  assert.match(html, /script\.js/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/landing-page.test.mjs`

Expected: FAIL because `index.html` does not exist.

- [ ] **Step 3: Write minimal implementation**

Create `index.html` with a semantic header, main hero, introduction, work section, and footer. Include an `aria-hidden="true"` inline SVG path in the hero and reference `styles.css` and `script.js`. Create `styles.css` with the defined palette, responsive layout, visible focus styles, and a `prefers-reduced-motion` block. Create `script.js` to set `#current-year` and progressively enhance the SVG path only when reduced motion is not requested.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/landing-page.test.mjs`

Expected: PASS with one test passing.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js tests/landing-page.test.mjs
git commit -m "feat: add nonlinear flow landing page"
```

### Task 2: Expand static verification for accessibility and motion

**Files:**
- Modify: `tests/landing-page.test.mjs`
- Modify: `index.html`
- Modify: `styles.css`

**Interfaces:**
- Consumes: `index.html` and `styles.css` from Task 1.
- Produces: A static test that guards landmark structure, decorative SVG behavior, and reduced-motion support.

- [ ] **Step 1: Write the failing test**

```js
test('landing page provides landmarks and honors reduced motion', async () => {
  const [html, css] = await Promise.all([
    readFile(new URL('../index.html', import.meta.url), 'utf8'),
    readFile(new URL('../styles.css', import.meta.url), 'utf8'),
  ]);
  assert.match(html, /<header/);
  assert.match(html, /<main/);
  assert.match(html, /<footer/);
  assert.match(html, /aria-hidden="true"/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/landing-page.test.mjs`

Expected: FAIL until every expected landmark, `aria-hidden`, and reduced-motion rule is present.

- [ ] **Step 3: Write minimal implementation**

Add any missing semantic landmark, decorative SVG accessibility attribute, or exact reduced-motion CSS media query. The media query disables the path animation and scroll smoothing.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/landing-page.test.mjs`

Expected: PASS with both tests passing.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css tests/landing-page.test.mjs
git commit -m "test: cover landing page accessibility contract"
```

### Task 3: Inspect the actual page rendering

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`

**Interfaces:**
- Consumes: The completed static landing page.
- Produces: Manual visual evidence for desktop and mobile layout.

- [ ] **Step 1: Start a local static server**

Run: `python3 -m http.server 4173 --directory .`

Expected: A local HTTP server provides the page.

- [ ] **Step 2: Open and inspect desktop rendering**

Open: `http://localhost:4173`

Expected: The hero is readable, the path remains secondary to copy, cards align in two columns, and the footer appears below the work section.

- [ ] **Step 3: Inspect narrow rendering**

Set viewport width to 390px.

Expected: Header, hero, and cards fit without horizontal scrolling; cards stack vertically; all copy remains legible.

- [ ] **Step 4: Re-run static test suite**

Run: `node --test tests/landing-page.test.mjs`

Expected: PASS with no failures.

- [ ] **Step 5: Commit any visual correction**

```bash
git add index.html styles.css script.js tests/landing-page.test.mjs
git commit -m "fix: refine nonlinear flow landing page layout"
```
