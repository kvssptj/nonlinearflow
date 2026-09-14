import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('landing page exposes the workshop identity and product cards', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /<main/);
  assert.match(html, /<h1[^>]*>Ideas don.t move in straight lines.<\/h1>/);
  assert.match(html, /Nonlinear Flow is an independent product workshop where I build small software products, experiments, and tools\./);
  assert.match(html, /Muffin/);
  assert.match(html, /Surfer/);
  assert.match(html, /styles\.css/);
  assert.match(html, /script\.js/);
});

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


test('landing page does not include a workshop slogan after the work section', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.doesNotMatch(html, /One person\. A few good questions\. More soon\./);
  assert.doesNotMatch(html, /class="note"/);
});


test("landing page does not include a redundant introductory section", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.doesNotMatch(html, /class="about"/);
  assert.doesNotMatch(html, /01 \/ About/);
});


test("landing page includes Rubricly in the product index", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.match(html, /Rubricly/);
});
