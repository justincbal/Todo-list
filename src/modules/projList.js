import { Project } from "./projects";
import { Task } from "./task";

class ProjectList {
    constructor() {
        console.log('Project list has been created');
        this.projList = [];
        this.projID = 0;
        this.currentProjectID;
    }

    // Save to local storage
    saveLocal() {
        localStorage.setItem('projectObject', JSON.stringify(this));
        this.displayProjectConsole();
    }

    // Add a project
    addProject() {
       const projectName = document.querySelector('.project-input');

       // Create new project object and add to ProjectList array
       const project = new Project(projectName.value, this.projID++);

       this.projList.push(project);

       // Add project to local storage
       this.saveLocal();

       // Display projects 
       this.renderProjects();

       // Resets form
       projectName.value = "";
    }

    // Display project list to console
    displayProjectConsole() {
        let array = [];
        for(const i in this.projList) {
            array.push(this.projList[i]._projectName);
        }
        console.log(`\nProject List: ${array}\n\n`);
    }

    renderProjects() {
        // Clear all existing projects
        const projectListing = document.querySelector('.project-list');
        
        while(projectListing.firstChild) projectListing.firstChild.remove();

        for(const i in this.projList) {
            const proj = document.createElement('div');
            const projName = document.createElement('h3');
            const projButton = document.createElement('button');

            proj.classList.add('project');
            projName.classList.add('project-name');
            projButton.classList.add('delete-project-button');

            projName.textContent = this.projList[i]._projectName;
            projButton.textContent = 'DEL';

            proj.setAttribute('id', `${this.projList[i]._projectID}`);

            projButton.addEventListener('click', (e)=> {
                this.deleteProject(e.target.parentNode.id);
            })

            projName.addEventListener('click', (e)=> {
                this.currentProjectID = e.target.parentNode.id;
                console.log(`Current ID is: ${this.currentProjectID}`);
                console.log(this.projList[this.currentProjectID]);
                this.displayTasks();
            })



            proj.append(projName);
            proj.append(projButton);

            projectListing.append(proj);
        }

        
    }

    deleteProject(id) {
        for(const i in this.projList) {
            if (this.projList[i]._projectID == id) {
                console.clear();
                console.log(`\nDeleting ${this.projList[i]._projectName}\n\n`)
                this.projList.splice(i, 1);
            }
        }

        // Resets ID to back to 0 
        if (this.projList.length === 0) {
            this.projID = 0;
        }

        this.saveLocal();

        this.renderProjects();
    }

    displayTasks() {
        // Clear section if populated
        const listSection = document.querySelector('.list-section');
        while(listSection.firstChild) {listSection.lastChild.remove();};

        // Repopulate
        const listHeading = document.createElement('h2');
        const listButton = document.createElement('button');

        listHeading.classList.add('list-heading');
        listButton.classList.add('list-button');

        listHeading.textContent = this.projList[this.currentProjectID]._projectName;
        listButton.textContent = 'Add Task';

        listSection.append(listHeading);
        listSection.append(listButton);

        listButton.addEventListener('click', () => {
            this.taskForm();
        })

        this.tasks();
    }

    deleteTask(id) {
        for(const i in this.projList[this.currentProjectID]._taskList) {
            if (this.projList[this.currentProjectID]._taskList[i]._id == id) {
                this.projList[this.currentProjectID]._taskList.splice(i, 1);
            }
        }
        this.saveLocal();
        this.displayTasks();
    }

    tasks() {
        const listSection = document.querySelector('.list-section');
        for(const i in this.projList[this.currentProjectID]._taskList) {
            const taskList = document.createElement('div');
            taskList.classList.add('task-list');
            taskList.setAttribute('id', this.projList[this.currentProjectID]._taskList[i]._id);
            const task = document.createElement('div');
            task.classList.add('task');
            const check = document.createElement('input');
            check.type = 'checkbox';
            check.classList.add('task-checkbox');
            const h3 = document.createElement('h3');
            h3.classList.add('task-name');
            h3.textContent = this.projList[this.currentProjectID]._taskList[i]._name;
            

            task.append(check);
            task.append(h3);

            taskList.append(task);
            listSection.append(taskList);

            // Check
            check.addEventListener('click', (e) => {
                this.deleteTask(e.target.parentNode.parentNode.id);
                //console.log(e.target.parentNode.parentNode.id);
            })
        }
    }

    

    taskForm() {
        console.clear();
        console.log('Task form called');
        const blur = document.querySelector('.blur');
        const status = document.querySelector('#status');
        const taskName = document.querySelector('#taskName');
        var obj = this;
       
        blur.style.display = 'block';

        const cancel = document.querySelector('.cancel-button');
        cancel.addEventListener('click', () => {
            blur.style.display = 'none';
            taskName.value = "";
        })


        const submit = document.querySelector('.submit-button');
        submit.addEventListener('click', function handler(){
            console.log('Submit called');
            blur.style.display = 'none';
            const task = new Task(taskName.value, obj.projList[obj.currentProjectID]._taskID++);

            // console.log(this); button
            // console.log(obj); this object
            // console.log(task); task

            obj.projList[obj.currentProjectID]._taskList.push(task);
            console.log(obj);

            taskName.value = "";
            obj.saveLocal();
            obj.displayTasks();

            this.removeEventListener('click', handler);

        })
    }

    

    
}

export { ProjectList }