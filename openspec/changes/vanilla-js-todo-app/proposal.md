## Why

This repository has no application code yet — it is a bare OpenSpec/Superspec scaffold. Adding a vanilla JavaScript todo app gives us a concrete, minimal codebase to exercise the full Superspec v3 workflow (brainstorm → apply → verify → finalize → archive) end-to-end with real code, real tests, and real commits. A todo app is small enough to complete in one session yet rich enough to demonstrate DOM manipulation, event handling, localStorage persistence, and filtering — the core patterns of any client-side JS project.

## What Changes

- **New files**: `index.html`, `style.css`, `app.js` added to the repository root.
- **New capability**: A fully functional todo application that runs in any modern browser by opening `index.html` — no server, no build step, no dependencies.
- **Core features**: Add todos via a text input + form submit, toggle completion state, delete individual todos, filter by All / Active / Completed, persist state to localStorage.

## Capabilities

### New Capabilities

- `todo-crud`: Create, read, toggle-complete, and delete todo items with DOM rendering and localStorage persistence.
- `todo-filtering`: Filter the visible todo list by status (All, Active, Completed) without page navigation.

### Modified Capabilities

(none — greenfield project)

## Impact

- **Code**: Three new files at the repo root (`index.html`, `style.css`, `app.js`). No existing code is modified.
- **Dependencies**: None. Zero npm packages, zero build tools.
- **Systems**: Browser-only. No backend, no API, no database beyond localStorage.
