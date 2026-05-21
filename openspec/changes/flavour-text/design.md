## Overview

Add a random two-word "flavour text" phrase to the top-left corner of the todo app. The phrase is sourced from a static word list, generated on page load, and changes on every refresh.

## Architecture

No architectural changes. This feature adds one new module (`words.js`) and minor additions to the existing `index.html`, `style.css`, and `app.js` files.

### Component: words.js (new)

- Exports a `WORDS` array containing ~60-80 curated words (mix of nouns and adjectives)
- Exports a `getRandomPhrase()` function that:
  1. Creates a copy of the array
  2. Picks a random index, removes that word (Fisher-Yates single step)
  3. Picks a second random index from the remaining words
  4. Returns both words joined with a space, lowercased

### HTML: index.html

- Add `<span id="flavour-text"></span>` as the first child inside `<main class="container">`, before the `<h1>`

### CSS: style.css

- `#flavour-text`: `font-size: 0.75rem`, `color: var(--color-muted)`, `display: block`, `margin-bottom: 0.25rem`
- No absolute positioning needed — natural document flow places it top-left of the container

### JS: app.js

- Import `getRandomPhrase` from `./words.js`
- In the init section, call `getRandomPhrase()` and set it as the text content of `#flavour-text`

## Data Flow

```
Page load → app.js init → getRandomPhrase() → picks 2 words from WORDS array → sets #flavour-text textContent
```

## Error Handling

No error cases. The word list is static and always available. The DOM element is hardcoded in HTML.

## Testing

Manual verification: refresh the page multiple times and confirm the phrase changes and appears in the top-left corner.
