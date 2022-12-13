import './styles/main.scss';
import { Project, createProject } from './project';
const taskBtn = document.querySelector('.taskbtn');
const delProj = document.querySelectorAll('.projDel');

// Create a project
 taskBtn.addEventListener('click', createProject);

//  Delete a project
