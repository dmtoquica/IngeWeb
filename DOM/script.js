// 1. Selección de elementos (Acceso al DOM)
const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Event Listener para el botón Agregar
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    const priority = priorityInput.value;

    if (taskText === '') {
        alert("Por favor, escribe una tarea");
        return;
    }

    createTaskCard(taskText, priority);
    taskInput.value = ''; // Limpiar input
});

// 3. Función para Crear Elementos (Inyección en el DOM)
function createTaskCard(text, priority) {
    // Crear el contenedor de la tarjeta
    const card = document.createElement('div');
    card.classList.add('task-card', priority);

    // Crear el contenido interno con Template Literals
    card.innerHTML = `
        <h3>${text}</h3>
        <p>Prioridad: <span>${priority.toUpperCase()}</span></p>
        <div class="actions">
            <button class="complete-btn">Terminar</button>
            <button class="delete-btn">Eliminar</button>
        </div>
    `;

    // 4. Agregar interactividad a los botones internos de la tarjeta
    
    // Botón Eliminar (Eliminar un nodo)
    card.querySelector('.delete-btn').onclick = () => {
        card.remove();
    };

    // Botón Completar (Modificar clases/estilos)
    card.querySelector('.complete-btn').onclick = () => {
        card.classList.toggle('completed');
    };

    // 5. Agregar la tarjeta al contenedor principal
    taskList.appendChild(card);
}