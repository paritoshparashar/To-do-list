import Task from './taskCreation.js';

class Project {

    constructor (name){
        this.name = name;
        this.taskList = {};
    }

    addNewTask (title, detail, date){
        
        this.taskList[title] = new Task (title , detail , date);
    }

    editTask (title, detail, date) {
        
        this.taskList[title].title = title;
        this.taskList[title].detail = detail;
        this.taskList[title].date = date;
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

    markImportant (taskName){
        if (this.taskList.hasOwnProperty(taskName)) {  
            this.taskList[taskName].important = !this.taskList[taskName].important;
            }
    
            else {
            console.log(`'${taskName}' task not found.`);
            }
    }

    
}
