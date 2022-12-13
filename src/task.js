import {Project} from './project';

class Task {
    constructor(name, description, date, status = "planned") {
        this.taskName = name;
        this.taskDesc = description;
        this.taskDate = date;
        this.taskStatus = status;
    }
}

function createTask() {
    // TODO: Create task object

    // Form fields
    const taskName = document.querySelector('#taskName');
    const taskDesc = document.querySelector('#taskDesc');
    const taskDate = document.querySelector('#taskDate');

    
    // Pop up form
    const taskForm = document.querySelector('.task-form');
    taskForm.style.display = "flex";

    // Close form
    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.addEventListener('click', () => {
        taskForm.style.display = "none";
        taskName.value = "";
        taskDesc.value = "";
        taskDate.value = "";
    })

    // Add button
    const addBtn = document.querySelector('.add');
    addBtn.addEventListener('click', () => {
        taskForm.style.display = "none";
        console.log(taskName.value);
        console.log(taskDesc.value);
        console.log(taskDate.value);
        

        const task = new Task(taskName.value, taskDesc.value, taskDate.value);
        console.table(task);
        

        taskName.value = "";
        taskDesc.value = "";
        taskDate.value = "";
    })
    
    
}

export {createTask};