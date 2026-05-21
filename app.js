import { getRandomPhrase } from './words.js';

const STORAGE_KEY = 'vanilla-todo-app';

let todos = [];
let currentFilter = 'all';

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    todos = stored ? JSON.parse(stored) : [];
  } catch {
    todos = [];
  }
}

function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;

  todos.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    text: trimmed,
    completed: false,
  });

  saveTodos();
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    render();
  }
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  render();
}

function getFilteredTodos() {
  switch (currentFilter) {
    case 'active':
      return todos.filter((t) => !t.completed);
    case 'completed':
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
}

function updateCount() {
  const active = todos.filter((t) => !t.completed).length;
  document.getElementById('todo-count').textContent =
    `${active} item${active === 1 ? '' : 's'} left`;
}

function render() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  const filtered = getFilteredTodos();

  for (const todo of filtered) {
    const li = document.createElement('li');
    li.dataset.id = todo.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.className = 'todo-text' + (todo.completed ? ' completed' : '');
    span.textContent = todo.text;

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.dataset.id = todo.id;
    btn.textContent = '\u00d7';

    li.append(checkbox, span, btn);
    list.appendChild(li);
  }

  updateCount();
}

// --- Event wiring ---

document.getElementById('todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  addTodo(input.value);
  input.value = '';
});

document.getElementById('todo-list').addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  const id = li.dataset.id;

  if (e.target.matches('input[type="checkbox"]')) {
    toggleTodo(id);
  } else if (e.target.matches('.delete-btn')) {
    deleteTodo(id);
  }
});

document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  currentFilter = btn.dataset.filter;

  document
    .querySelectorAll('.filter-btn')
    .forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  render();
});

// --- Init ---

loadTodos();
render();
document.getElementById('flavour-text').textContent = getRandomPhrase();
