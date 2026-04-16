const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    if (taskInput.value === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskInput.value}</span>
        <button class="del-btn" onclick="this.parentElement.remove()">X</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = "";
}

// Função para marcar como concluída (Requisito do Desafio)
function toggleComplete(element) {
    element.parentElement.classList.toggle('completed');
}

addBtn.addEventListener('click', addTask);
