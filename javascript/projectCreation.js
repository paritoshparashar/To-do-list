class Project {

    constructor (name){
        this.name = name;
        this.taskList = [];
    }

    addNewTask (title, detail, date){
        let newTask = new Task (title , detail , date);
        this.taskList.push(newTask);
    }

    editTask (taskName) {

    }

    removeTask (taskName){


    }

    markTaskCompleted (taskName) {


    }

    m
}
