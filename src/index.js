import './styles/main.scss';
import { ProjectList } from './modules/projList';
import { Project } from './modules/projects';

// Helper to print to console
const print = (msg) => console.log(msg);

// Automatically create project list upon load
const projectList = new ProjectList();

// Add a project
const projectButton = document.querySelector('.project-button');

projectButton.addEventListener('click', () => {
    projectList.addProj();
    projectList.updateProjectDisplay();
});

// Add a task
// const taskButton = document.querySelector('.list-button');

// taskButton.addEventListener('click', () => {
//     print(projectList.this);
// })


