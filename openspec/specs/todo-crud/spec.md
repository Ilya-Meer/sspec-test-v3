## Requirements

### Requirement: Add Todo

The application SHALL allow the user to add a new todo item by typing text into an input field and submitting a form. Each todo MUST be assigned a unique identifier and stored with an initial state of "active" (not completed).

#### Scenario: User submits a non-empty todo

- **WHEN** the user types "Buy groceries" into the input field and presses Enter (or clicks submit)
- **THEN** a new todo item with text "Buy groceries" SHALL appear at the end of the list, the input field SHALL be cleared, and the todo SHALL be persisted to localStorage

#### Scenario: User submits an empty todo

- **WHEN** the user submits the form with an empty or whitespace-only input
- **THEN** no todo SHALL be created and the list SHALL remain unchanged

---

### Requirement: Render Todo List

The application SHALL render all todo items as a list in the DOM. Each item MUST display its text content and provide controls for toggling completion and deleting.

#### Scenario: Page loads with existing todos in localStorage

- **WHEN** the page loads and localStorage contains previously saved todos
- **THEN** all saved todos SHALL be rendered in the list in their original order with their saved completion state

#### Scenario: Page loads with empty localStorage

- **WHEN** the page loads and localStorage contains no saved todos
- **THEN** the list SHALL be empty

---

### Requirement: Toggle Todo Completion

The application SHALL allow the user to toggle a todo between "active" and "completed" states. Completed todos MUST be visually distinguished from active todos.

#### Scenario: User completes an active todo

- **WHEN** the user clicks the completion toggle on an active todo
- **THEN** the todo SHALL be marked as completed, visually styled as completed (e.g., strikethrough), and the change SHALL be persisted to localStorage

#### Scenario: User reactivates a completed todo

- **WHEN** the user clicks the completion toggle on a completed todo
- **THEN** the todo SHALL be marked as active, the completed visual style SHALL be removed, and the change SHALL be persisted to localStorage

---

### Requirement: Delete Todo

The application SHALL allow the user to permanently remove a todo from the list by clicking a delete button on that item.

#### Scenario: User deletes a todo

- **WHEN** the user clicks the delete button on a todo item
- **THEN** the todo SHALL be removed from the DOM and from localStorage

---

### Requirement: LocalStorage Persistence

The application SHALL persist the full todo list to `localStorage` under a consistent key. Every mutation (add, toggle, delete) MUST immediately update localStorage so that the state survives page reloads.

#### Scenario: State survives a page reload

- **WHEN** the user adds three todos, completes one, reloads the page
- **THEN** all three todos SHALL be present with their correct completion states
