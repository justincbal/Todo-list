import './styles/main.scss';
import { ProjectList } from './modules/projList';

// Automatically create project list upon load
const projectList = new ProjectList();

// Add a project
const projectButton = document.querySelector('.project-button');

projectButton.addEventListener('click', () => {
    projectList.addProj();
    projectList.updateProjectDisplay();
});

// Delete a project
