import Task from './taskCreation.js';

class Project {

    constructor (name){
        this.name = name;
        this.taskList = {};
    }

    addNewTask (title, detail, date){
        
        this.taskList[title] = new Task (title , detail , date);
    }

    editTask (taskName) {

    }

    removeTask (taskName){

        if (this.taskList.hasOwnProperty(taskName)) {
            delete this.taskList[taskName];
        }

        else {
            console.log(`'${taskName}' task not found.`);
            }
        
    }

    toogleTaskCompleted (taskName) {

        if (this.taskList.hasOwnProperty(taskName)) {  
        this.taskList[taskName].completed = !this.taskList[taskName].completed;
        }

        else {
        console.log(`'${taskName}' task not found.`);
        }
    }

    
}
