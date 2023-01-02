class Task {
    constructor(name, status = 'planned', id = 0) {
        this._name = name;
        this._status = status;
        this._id = id;
    }   
 }

 export { Task }