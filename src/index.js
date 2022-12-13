import './styles/main.scss';
import { Project, createProject } from './project';
import { createTask } from './task';
const taskBtn = document.querySelector('.taskbtn');
const addList = document.querySelector('.addList');

// Create a project
 taskBtn.addEventListener('click', createProject);

// Create a task
addList.addEventListener('click', createTask);
