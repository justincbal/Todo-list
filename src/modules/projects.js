

class Project {
    constructor(name, id) {
        this._projectName = name;
        this._projectID = id;
        this._taskID = 0;
        this._taskList = [];

        console.clear();
        console.log(`\nProject created:\nName: ${this._projectName}\nID: ${this._projectID}\n\n`);
    }

   
}

export { Project }