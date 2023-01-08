class Task {
    constructor(name, status = 'planned', id) {
        this._name = name;
        this._status = status;
        this._id = id;
    }   
 }

 export { Task }