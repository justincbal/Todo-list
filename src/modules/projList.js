import { Project } from "./projects";
import { Task } from "./task";

class ProjectList {
    constructor() {
        console.log('Project list has been created');
        this.projList = [];
        this.projID = 0;
        this.currentProjectID;
    }

    
    addProj() {
        const projName = document.querySelector('.project-input');
        const project = new Project(projName.value, this.projID++);
        this.projList.push(project);
        projName.value = "";
    }

    updateProjectDisplay() {
        this.removeAllProjects();

        const projectListing = document.querySelector('.project-list');
        for(const i in this.projList) {
            const project = document.createElement('div');
            const projectName = document.createElement('h3');
            const projectButton = document.createElement('button');

            project.classList.add('project');
            project.setAttribute('id', `${this.projList[i]._projectID}`);
            projectName.classList.add('project-name');
            projectButton.classList.add('delete-project-button');

            // TODO: Text content
            projectName.textContent = this.projList[i]._projectName;
            projectButton.textContent = 'DEL';

            // EVENT LISTENER
            projectButton.addEventListener('click', () => {
                this.deleteProj(project.id);
            });

            projectName.addEventListener('click', () => {
                this.displayProject(project.id);
                this.currentProjectID = project.id;
                console.log(`This is the current object ID: ${this.currentProjectID}`);
            })

            project.append(projectName);
            project.append(projectButton);
            projectListing.append(project);
        }
    }

    removeAllProjects() {
        const projectListing = document.querySelector('.project-list');
        while(projectListing.firstChild) {
            projectListing.firstChild.remove();
        }
    }

   deleteProj(id) {
        for(const i in this.projList) {
            if (this.projList[i]._projectID == id) {
                console.log(`DELETING ${this.projList[i]._projectName}`);
                this.projList.splice(i, 1);
            }
        }

        this.updateProjectDisplay();
        console.table(this.projList);
   }

   displayProject(id) {
        const listSection = document.querySelector('.list-section');
        while(listSection.firstChild) listSection.firstChild.remove();
        //const listHeading = document.querySelector('.list-heading');
        const listHeading = document.createElement('h2');
        listHeading.classList.add('list-heading');

        const listButton = document.createElement('button');
        listButton.classList.add('list-button');
        listButton.textContent = 'Add Task';

        // List event
        listButton.addEventListener('click', () => {
            this.createTask();
        })

        listSection.append(listHeading);
        listSection.append(listButton);
        let copyObj;
        
        for(const i in this.projList) {
            if (this.projList[i]._projectID == id) {
                // This copies a object
                copyObj = structuredClone(this.projList[i]);    
            }
        }

        //console.log(copyObj);
        //console.log(` This is the project list array ${this.projList}`);

        listHeading.textContent = copyObj._projectName;

        // TODO: Display Tasks
        if (copyObj._taskList.length == 0) {
            const emptyMessage = document.createElement('div');
            const emptyh1 = document.createElement('h1');
            emptyh1.textContent = 'No current tasks';
            emptyMessage.classList.add('empty-task');

            emptyMessage.append(emptyh1);
            listSection.append(emptyMessage);
            //const emptyMessage = document.querySelector('.empty-task');
            //emptyMessage.style.display = 'block';
        }
        else {
            const taskLst = document.createElement('div');
            const task = document.createElement('div');
            const input = document.createElement('input');
            const h3 = document.createElement('h3');
            const h4 = document.createElement('h4');

            taskLst.classList.add('task-list');
            task.classList.add('task');
            input.type = 'checkbox';
            input.classList.add('task-checkbox');
            h3.classList.add('task-name');
            h4.classList.add('task-urgency');


            for(const i in copyObj._taskList) {
                h3.textContent = copyObj._taskList[i]._name;
                listSection.append(h3);
            }
        }
   }

   createTask() {
    const taskForm = document.querySelector('.blur');
    const status = document.querySelector('#status');
    const taskName = document.querySelector('#taskName');
    const cancel = document.querySelector('.cancel-button');
    const submit = document.querySelector('.submit-button');

    cancel.addEventListener('click', () => {
        taskForm.style.display = 'none';
    })

    taskForm.style.display = 'block';

    submit.addEventListener('click', () => {
        const task = new Task(taskName.value, status.value)
        //console.log(taskName.value);
        //console.log(status.value);
        this.projList[this.currentProjectID]._taskList.push(task);
        taskName.value = "";
        console.log(this.projList[this.currentProjectID]);
        taskForm.style.display = 'none';
        // this.displayProject();
    })
    }

    
    
}

export { ProjectList }