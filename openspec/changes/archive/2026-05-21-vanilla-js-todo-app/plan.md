# Vanilla JS Todo App Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development
> to implement this plan task-by-task.

**Goal:** Build a zero-dependency todo app (add, toggle, delete, filter, persist) with vanilla JS, HTML, and CSS.

**Architecture:** Three files — `index.html` (semantic markup + ES module script), `style.css` (custom properties, responsive layout), `app.js` (data model + DOM rendering + event delegation). All state lives in a JS array synced to localStorage on every mutation.

**Tech Stack:** HTML5, CSS3 (custom properties), vanilla ES module JavaScript, localStorage API. No frameworks, no build tools, no npm.

**Reference specs:** `openspec/changes/vanilla-js-todo-app/specs/todo-crud/spec.md`, `openspec/changes/vanilla-js-todo-app/specs/todo-filtering/spec.md`

---

## Task 1: Project scaffold (tasks 1.1, 1.2)

**Files:** `index.html`, `style.css`

- [ ] **Step 1:** Create `index.html` with `<!DOCTYPE html>`, `<head>` linking `style.css`, and `<body>` containing:
  - `<h1>` title
  - `<form id="todo-form">` with `<input id="todo-input" type="text" placeholder="What needs to be done?">` and a submit button
  - `<ul id="todo-list"></ul>` (empty)
  - `<div id="filters">` with three `<button>` elements: All (default active), Active, Completed
  - `<span id="todo-count"></span>` for "N items left"
  - `<script type="module" src="app.js"></script>` before `</body>`

- [ ] **Step 2:** Create `style.css` with:
  - CSS custom properties: `--color-primary`, `--color-bg`, `--color-text`, `--color-muted`, `--color-border`
  - Base layout: centered container, max-width 500px
  - Input and form styling
  - List styling: no bullets, padding, border separators
  - `.completed` class: `text-decoration: line-through; color: var(--color-muted)`
  - Filter button styling with `.active` highlight class
  - Delete button styling (subtle until hover)

- [ ] **Step 3:** Verify `index.html` opens in a browser without errors (check the console)

**Commit:** `feat: scaffold HTML + CSS for todo app`

---

## Task 2: Data model and persistence (task 2.1)

**Files:** `app.js`

- [ ] **Step 1:** Create `app.js`. Define a module-scoped `let todos = []` array and a `const STORAGE_KEY = 'vanilla-todo-app'`.

- [ ] **Step 2:** Implement `function saveTodos()` — `localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))`.

- [ ] **Step 3:** Implement `function loadTodos()` — parse from localStorage, fall back to `[]` if missing or invalid JSON.

- [ ] **Step 4:** Call `loadTodos()` at module init to populate `todos` on page load.

- [ ] **Step 5:** Test: open the browser console, manually run `localStorage.setItem('vanilla-todo-app', JSON.stringify([{id:'1',text:'Test',completed:false}]))`, reload, confirm `todos` array is populated.

**Commit:** `feat: add todo data model with localStorage persistence`

---

## Task 3: Add todo (task 2.2)

**Files:** `app.js`

- [ ] **Step 1:** Implement `function addTodo(text)`:
  - Trim the input; return early if empty
  - Generate a unique id (`Date.now().toString(36)` or similar)
  - Push `{ id, text, completed: false }` to `todos`
  - Call `saveTodos()` and `render()`

- [ ] **Step 2:** Wire the form submit event: `document.getElementById('todo-form').addEventListener('submit', ...)` — prevent default, read input value, call `addTodo`, clear the input.

- [ ] **Step 3:** Implement a minimal `function render()` stub that just `console.log(todos)` for now (full render in next task).

- [ ] **Step 4:** Test: type a todo, submit, check console output. Submit empty input, confirm no new entry.

**Commit:** `feat: implement addTodo with form submission`

---

## Task 4: Render, toggle, delete (tasks 2.3, 2.4, 2.5)

**Files:** `app.js`

- [ ] **Step 1:** Implement the full `render()` function:
  - Get `#todo-list` element, clear its `innerHTML`
  - Get the current filter state (default `'all'`)
  - Filter `todos` based on the current filter
  - For each todo, create a `<li>` with:
    - `<input type="checkbox">` checked if `todo.completed`
    - `<span class="todo-text">` with `todo.text` (add `.completed` class if completed)
    - `<button class="delete-btn" data-id="${todo.id}">×</button>`
  - Set `data-id` attribute on the `<li>` for event delegation
  - Append all `<li>` elements to `#todo-list`

- [ ] **Step 2:** Implement `function toggleTodo(id)`: find the todo by id, flip `completed`, call `saveTodos()` and `render()`.

- [ ] **Step 3:** Implement `function deleteTodo(id)`: filter out the todo with that id, call `saveTodos()` and `render()`.

- [ ] **Step 4:** Wire event delegation on `#todo-list`:
  - Click on checkbox → `toggleTodo(id)`
  - Click on delete button → `deleteTodo(id)`

- [ ] **Step 5:** Test: add 2-3 todos, toggle completion (verify strikethrough), delete one (verify removal), reload (verify persistence).

**Commit:** `feat: implement render, toggle, and delete`

---

## Task 5: Filtering and active count (tasks 3.1, 3.2)

**Files:** `app.js`

- [ ] **Step 1:** Add module-scoped `let currentFilter = 'all'`.

- [ ] **Step 2:** Wire click handlers on the three filter buttons: update `currentFilter`, toggle the `.active` class on the clicked button (remove from siblings), call `render()`.

- [ ] **Step 3:** Update `render()` to filter `todos` based on `currentFilter` before building the DOM (`'active'` → `!completed`, `'completed'` → `completed`, `'all'` → no filter).

- [ ] **Step 4:** Implement `function updateCount()`: count `todos.filter(t => !t.completed).length`, set `#todo-count` textContent to `"N items left"`. Call this at the end of `render()`.

- [ ] **Step 5:** Test: add 3 todos, complete 1. Verify count shows "2 items left". Click Active → only 2 shown. Click Completed → only 1 shown. Click All → all 3 shown.

**Commit:** `feat: add filtering and active item count`

---

## Task 6: Integration and polish (tasks 4.1, 4.2)

**Files:** `app.js`, `style.css`

- [ ] **Step 1:** Ensure `render()` is called once on page load (after `loadTodos()`) so existing todos display immediately.

- [ ] **Step 2:** Verify the full localStorage round-trip: add todos, complete some, switch filters, reload — all state should persist.

- [ ] **Step 3:** Polish CSS: confirm responsive layout, hover states on delete button, focus styling on input, filter button transitions.

- [ ] **Step 4:** Check for edge cases: rapid-fire adds, toggling while filtered, deleting the last item.

**Commit:** `feat: integration polish and localStorage verification`
