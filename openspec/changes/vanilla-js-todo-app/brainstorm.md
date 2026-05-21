## Design Summary

Build a simple, self-contained Todo application using vanilla JavaScript, HTML, and CSS — no frameworks, no build tools, no dependencies. The app runs by opening `index.html` in a browser. It supports adding, completing, and deleting todos, with localStorage persistence so items survive page reloads.

The goal is a clean, minimal reference implementation that demonstrates DOM manipulation, event handling, and client-side storage without any abstraction layers.

## Alternatives Considered

### Alternative A: Single-file HTML

- **Approach**: Everything (HTML, CSS, JS) in a single `index.html` file using `<style>` and `<script>` tags.
- **Pros**: Maximally simple distribution — one file to share or open. Zero project structure overhead.
- **Cons**: Harder to maintain as the app grows. No separation of concerns. Syntax highlighting in editors may be suboptimal for mixed content.
- **Why not chosen**: While appealing for trivial demos, even a small todo app benefits from separating structure, style, and behavior for readability.

### Alternative B: Multi-file with ES modules

- **Approach**: Separate `index.html`, `style.css`, and `app.js` files. Use ES module `<script type="module">` for the JS entry point, with the option to split into multiple JS modules later.
- **Pros**: Clean separation of concerns. Modern browser-native module support. Easy to extend (add a `storage.js` module, a `todo-item.js` component, etc.). Works with `file://` protocol in most browsers (no server needed).
- **Cons**: Slightly more files than Alternative A. ES modules over `file://` may require a local server in some browsers (Firefox).
- **Why not chosen**: This is the chosen approach — see Agreed Approach.

### Alternative C: Multi-file with a bundler (Vite/Parcel)

- **Approach**: Use a lightweight bundler like Vite for dev server, HMR, and production builds. Still vanilla JS, no framework.
- **Pros**: Hot module reloading during development. Production-optimized output. Easy to add TypeScript later.
- **Cons**: Introduces a build step and `node_modules`. No longer "just open `index.html`." Adds complexity that doesn't serve a vanilla JS demo.
- **Why not chosen**: The point is zero dependencies — a bundler contradicts the core constraint.

## Agreed Approach

**Alternative B: Multi-file with ES modules.** Three files — `index.html`, `style.css`, `app.js` — with a clean separation of concerns. JavaScript uses a single `app.js` module (no further splitting needed for this scope). Data persists to `localStorage`. No server, no build step, no dependencies.

Rationale: This hits the sweet spot between simplicity (only 3 files) and maintainability (each concern in its own file). ES modules are natively supported in all modern browsers and keep the code modern without requiring tooling.

## Key Decisions

1. **No frameworks or libraries** — the entire point is demonstrating vanilla JS patterns.
2. **localStorage for persistence** — simple, synchronous, browser-native. No need for IndexedDB at this scale.
3. **ES module script tag** — `<script type="module" src="app.js">` for clean scoping and modern syntax.
4. **Semantic HTML** — use `<form>`, `<input>`, `<ul>`, `<li>`, `<button>` for accessibility and simplicity.
5. **CSS custom properties** — use a few CSS variables for theming consistency without a preprocessor.
6. **No routing** — single-page, single-view. Filter buttons (All / Active / Completed) filter in place rather than navigating.

## Open Questions

None — the scope is deliberately small and well-understood.
