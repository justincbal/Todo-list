import { Project } from "./projects";

class ProjectList {
    constructor() {
        console.log('Project list has been created');
        this.projList = [];
        this.projID = 0;
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

            projectButton.addEventListener('click', () => {
                this.deleteProj(project.id);
            });

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


    
}

export { ProjectList }