import { isLocalStorageAvailable } from './modules/storage';
import './styles/main.scss';
import { ProjectList } from './modules/projList';
import { Project } from './modules/projects';


// Helper to print to console
const print = (msg) => console.log(msg);

// Check local storage connection
print(`Local storage connected: ${isLocalStorageAvailable()}`);

// Create project on page load
const projectList = new ProjectList();

// Populate projectList with data in local storage if exist
if (localStorage.length !== 0) {
    // Get localstorage project
    let localObj = JSON.parse(localStorage.getItem('projectObject'));
    print(localObj);
    print(projectList);

    projectList.projID = localObj.projID;
    projectList.projList = localObj.projList.slice(0);

    print(localObj);
    print(projectList);

    projectList.renderProjects();
}




// Project button
const projectButton = document.querySelector('.project-button');

projectButton.addEventListener('click', () => {
    projectList.addProject();
})