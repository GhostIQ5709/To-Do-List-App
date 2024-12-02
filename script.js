// Get elements
const todoList = document.getElementById('todo-list');
const todoItems = document.getElementById('todo-items');
const newTodoInput = document.getElementById('new-todo');
const addTodoBtn = document.getElementById('add-todo-btn');

// Initialize todo list data
let todoData = [];

// Add event listener to add todo button
addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodoText = newTodoInput.value.trim();
    if (newTodoText!== '') {
        addTodoItem(newTodoText);
        newTodoInput.value = '';
    }
});

// Add todo item to list
function addTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.textContent = text;
    todoItems.appendChild(todoItem);
    todoData.push(text);
}

// Toggle todo item completion
todoItems.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});