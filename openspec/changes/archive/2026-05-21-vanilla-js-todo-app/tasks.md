## 1. Project scaffold

- [x] 1.1 Create `index.html` with semantic markup: form with text input, empty `<ul>` for the todo list, filter buttons (All / Active / Completed), and an active-count display. Link `style.css` and `app.js` (ES module).
- [x] 1.2 Create `style.css` with base styles, CSS custom properties for theming, completed-todo styling (strikethrough + muted color), and active filter-button highlight.

## 2. Core CRUD (todo-crud capability)

- [x] 2.1 Implement the data model: an array of `{ id, text, completed }` objects, a `saveTodos()` function that writes to localStorage, and a `loadTodos()` function that reads from localStorage on page load.
- [x] 2.2 Implement `addTodo(text)`: generate a unique id, push to the array, save, and re-render. Guard against empty/whitespace-only input.
- [x] 2.3 Implement `renderTodos()`: clear the list element, iterate the (filtered) array, create `<li>` elements with a completion checkbox, text span, and delete button.
- [x] 2.4 Implement `toggleTodo(id)`: flip the `completed` boolean, save, and re-render.
- [x] 2.5 Implement `deleteTodo(id)`: remove from the array, save, and re-render.

## 3. Filtering (todo-filtering capability)

- [x] 3.1 Implement filter state (`all` | `active` | `completed`) and wire the three filter buttons to update it and re-render.
- [x] 3.2 Implement active-item count: display "N items left" and update after every mutation.

## 4. Integration and polish

- [x] 4.1 Wire form submit event to `addTodo`, delegation-based click events on the list to `toggleTodo` and `deleteTodo`, and click events on filter buttons.
- [x] 4.2 Verify localStorage round-trip: add todos, reload the page, confirm state persists with correct completion states.
