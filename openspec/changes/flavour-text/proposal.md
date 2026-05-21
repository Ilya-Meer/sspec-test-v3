## Why

The todo app is functional but visually plain. Adding a random two-word "flavour text" phrase to the top-left corner gives the app a small touch of personality. It's a lightweight, decorative addition that makes each page load feel slightly unique without affecting any existing functionality.

## What Changes

- A new `words.js` module is added containing a static word list and a `getRandomPhrase()` function
- `index.html` gains a `<span id="flavour-text">` element at the top of the container
- `style.css` gains styling for `#flavour-text` (small, muted, top-left placement)
- `app.js` imports `getRandomPhrase()` and sets the phrase on page load

## Capabilities

### New Capabilities

- `flavour-text-display`: Random two-word phrase generation from a static word list and display in the app UI on page load

### Modified Capabilities

None — no existing specs are affected. The todo CRUD and filtering behavior is unchanged.

## Impact

- **Code**: Adds one new file (`words.js`), minor additions to three existing files (`index.html`, `style.css`, `app.js`)
- **APIs**: None
- **Dependencies**: None — uses only vanilla JS
- **Systems**: No backend, no network calls, no localStorage changes
