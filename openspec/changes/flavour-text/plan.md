# Flavour Text Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development
> to implement this plan task-by-task.

**Goal:** Add a random two-word phrase to the top-left corner of the todo app that changes on every page refresh.

**Architecture:** One new ES module (`words.js`) provides a word list and phrase generator. The existing `index.html`, `style.css`, and `app.js` each get a small addition to display and style the phrase on load.

**Tech Stack:** Vanilla JavaScript (ES modules), HTML, CSS

---

## Task 1: Word List Module (`words.js`)

- [ ] **Step 1:** Create `words.js` in the project root. Export a `WORDS` constant — an array of at least 50 words. Use a mix of nouns and adjectives (e.g., "cosmic", "waffle", "velvet", "cactus", "lunar", "pickle", "amber", "phantom"). Keep words short and varied.
- [ ] **Step 2:** Export a `getRandomPhrase()` function. Implementation: generate a random index into `WORDS`, extract that word. Generate a second random index into the remaining array (length - 1), extract the second word. Return both joined with a space.
- [ ] **Step 3:** Verify the module loads without errors by temporarily importing it in the browser console or adding a quick `console.log(getRandomPhrase())` call.

**Commit point:** `Add words.js with static word list and getRandomPhrase()`

---

## Task 2: HTML Element (`index.html`)

- [ ] **Step 1:** Add `<span id="flavour-text"></span>` as the first child inside `<main class="container">`, before the `<h1>todos</h1>` element.

**Commit point:** `Add flavour-text span to index.html`

---

## Task 3: CSS Styling (`style.css`)

- [ ] **Step 1:** Add a `#flavour-text` rule block with: `font-size: 0.75rem`, `color: var(--color-muted)`, `display: block`, `margin-bottom: 0.25rem`.

**Commit point:** `Style flavour-text element`

---

## Task 4: Wire It Up (`app.js`)

- [ ] **Step 1:** Add `import { getRandomPhrase } from './words.js';` at the top of `app.js`.
- [ ] **Step 2:** In the init section (after `render()`), add: `document.getElementById('flavour-text').textContent = getRandomPhrase();`
- [ ] **Step 3:** Open the app in a browser. Verify the phrase appears in the top-left, is small and muted, and changes on each refresh.

**Commit point:** `Wire up flavour text display on page load`
