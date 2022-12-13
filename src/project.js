class Project {
    constructor(name) {
        this._projectName = name;
    }
}


function createProject(){
    const projName = document.querySelector('.projName');
    const sideNav = document.querySelector('.side-nav');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const btn = document.createElement('button');
    div.classList.add("nav-project");
    btn.classList.add("projDel");
    h2.textContent = projName.value;
    div.append(h2);
    div.append(btn);
    sideNav.append(div);
    projName.value = "";

    btn.addEventListener('click', deleteProject);
}

function deleteProject() {
    this.parentNode.remove();
}

export { Project, createProject };