class Project {
    constructor(name, id) {
        this._projectName = name;
        this._projectID = id;

        console.log(`New project has been created. NAME: ${this._projectName} | ID: ${this._projectID}`);
    }
}

export { Project }