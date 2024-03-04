import checkPropertyExists from "./utils/propertyExistsMethod.js";
import Task from "./TaskCreationClass.js";

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = {};
  }

  addNewTask(title, detail, date) {
    this.taskList[title] = new Task(title, detail, date);
  }

  editTask(title, detail, date) {
    let taskObj = this.taskList[title];

    taskObj.title = title;
    taskObj.detail = detail;
    taskObj.date = date;
  }

  removeTask(taskName) {
    if (checkPropertyExists(this.taskList, taskName)) {
      delete this.taskList[taskName];
    }
  }

  toogleTaskCompleted(taskName) {
    if (checkPropertyExists(this.taskList, taskName)) {
      this.taskList[taskName].completed = !this.taskList[taskName].completed;
    }
  }

  markImportant(taskName) {
    if (checkPropertyExists(this.taskList, taskName)) {
      this.taskList[taskName].important = !this.taskList[taskName].important;
    }
  }
}

export default Project;
