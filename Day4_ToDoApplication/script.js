let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

const taskInput =
    document.getElementById("taskInput");

const taskList =
    document.getElementById("taskList");

const addBtn =
    document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function addTask(){

    const title = taskInput.value.trim();

    if(title === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        title,
        completed:false
    };

    tasks = [...tasks, task];

    taskInput.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(id){

    tasks = tasks.map(task => {

        if(task.id === id){

            return {
                ...task,
                completed:!task.completed
            };
        }

        return task;
    });

    saveTasks();
    renderTasks();
}

function deleteTask(id){

    tasks = tasks.filter(
        task => task.id !== id
    );

    saveTasks();
    renderTasks();
}

function filterTasks(type){

    currentFilter = type;

    renderTasks();
}

function updateStats(){

    const total = tasks.length;

    const completed =
        tasks.filter(
            task => task.completed
        ).length;

    const pending =
        total - completed;

    document.getElementById(
        "totalTasks"
    ).innerText = total;

    document.getElementById(
        "completedTasks"
    ).innerText = completed;

    document.getElementById(
        "pendingTasks"
    ).innerText = pending;
}

function renderTasks(){

    let filteredTasks = tasks;

    if(currentFilter === "completed"){

        filteredTasks =
            tasks.filter(
                task => task.completed
            );
    }

    if(currentFilter === "pending"){

        filteredTasks =
            tasks.filter(
                task => !task.completed
            );
    }

    taskList.innerHTML = "";

    filteredTasks.forEach(task => {

        const { id, title, completed } = task;

        taskList.innerHTML += `
        <li class="task">

            <div class="task-left">

                <input
                    type="checkbox"
                    ${completed ? "checked" : ""}
                    onchange="toggleTask(${id})">

                <span class="${
                    completed ? "completed" : ""
                }">
                    ${title}
                </span>

            </div>

            <button
                class="delete-btn"
                onclick="deleteTask(${id})">
                Delete
            </button>

        </li>
        `;
    });

    updateStats();
}

renderTasks();