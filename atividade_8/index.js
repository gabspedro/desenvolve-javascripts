const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.status;
        checkbox.addEventListener('change', () => {
            task.status = checkbox.checked;
            saveTasksToLocalStorage();
            renderTasks();
        });

        const label = document.createElement('span');
        label.textContent = task.description;
        label.className = task.status ? 'completed' : '';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasksToLocalStorage();
            renderTasks();
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
    });
}

addButton.addEventListener('click', () => {
    const description = taskInput.value.trim();
    if (description) {
        tasks.push({ description, status: false });
        saveTasksToLocalStorage();
        renderTasks();
        taskInput.value = '';
    }
});

renderTasks();