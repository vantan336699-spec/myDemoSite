document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const cancelBtn = document.getElementById('btn-cancel');

    form.addEventListener('submit', handleFormSubmit);
    
    cancelBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

function handleFormSubmit(event) {
    event.preventDefault(); 

    const title = document.getElementById('task-title').value.trim();
    const priority = document.getElementById('task-priority').value;
    const date = document.getElementById('task-date').value;

    if (!title || !priority || !date) {
        alert('Пожалуйста, заполните все обязательные поля!');
        return;
    }

    const newTask = {
        id: Date.now().toString(), 
        title: title,
        priority: priority,
        date: date,
        isCompleted: false
    };

    const tasks = getTasks();
    tasks.push(newTask);
    saveTasks(tasks);

    window.location.href = 'index.html';
}