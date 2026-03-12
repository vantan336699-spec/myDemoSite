document.addEventListener('DOMContentLoaded', () => {
    calculateStats();
});

function calculateStats() {
    
    const tasks = getTasks(); 
    const total = tasks.length;
    const completed = tasks.filter(task => task.isCompleted).length;
    const pending = total - completed;

    document.getElementById('total-tasks').textContent = total;
    document.getElementById('completed-tasks').textContent = completed;
    document.getElementById('pending-tasks').textContent = pending;
}