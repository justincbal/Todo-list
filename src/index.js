import './styles/main.scss';
import { ProjectList } from './modules/projList';
import { Project } from './modules/projects';

// Helper to print to console
const print = (msg) => console.log(msg);

// Automatically create project list upon load
const projectList = new ProjectList();

// Add a project
const projectButton = document.querySelector('.project-button');

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    print('STORAGE CONNECTED');
  }
  else {
    // Too bad, no localStorage for us
    print('STORAGE UNAVAILABLE');
  }
