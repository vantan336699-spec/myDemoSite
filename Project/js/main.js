document.addEventListener('DOMContentLoaded', () => {
    renderItems();
});

function renderItems() {
    const taskList = document.getElementById('task-list');
    const taskCount = document.getElementById('task-count');
    const tasks = getTasks();

    taskList.innerHTML = ''; 
    taskCount.textContent = tasks.length; 

    if (tasks.length === 0) {
        taskList.innerHTML = '<p style="text-align: center; color: #666;">Задач пока нет. Добавьте новую!</p>';
        return;
    }

    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = `task-card ${task.isCompleted ? 'completed' : ''}`;
        
        card.innerHTML = `
            <div class="task-info">
                <h3>${task.title}</h3>
                <div class="task-meta">
                    <span>📅 ${task.date}</span> | 
                    <span>🔥 ${task.priority}</span>
                </div>
            </div>
            <div class="task-actions">
                <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onchange="toggleTaskStatus('${task.id}')">
                <button class="btn delete-btn" onclick="deleteTask('${task.id}')">Удалить</button>
            </div>
        `;
        taskList.appendChild(card);
    });
}

function toggleTaskStatus(id) {
    const tasks = getTasks();
    const taskIndex = tasks.findIndex(t => t.id === id);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
        saveTasks(tasks);
        renderItems(); 
    }
}

function deleteTask(id) {
    const isConfirmed = confirm('Вы уверены, что хотите удалить эту задачу?');
    
    if (isConfirmed) {
        let tasks = getTasks();
        tasks = tasks.filter(t => t.id !== id);
        saveTasks(tasks);
        renderItems();
    }
}