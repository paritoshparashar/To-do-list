import Project from "./ProjectCreationClass";
import checkPropertyExists from "./propertyExistsMethod";

class ProjectList {
  constructor() {
    this.projectList = {};
  }

  addProject(projName) {
    this.projectList[projName] = new Project(projName);
  }

  removeProject(projName) {
    if (checkPropertyExists(this.projectList, projName)) {
      delete this.projectList[projName];
    }
  }

  renameProject(oldName, newName) {
    if (checkPropertyExists(this.projectList, oldName)) {
      this.projectList[newName] = this.projectList[oldName];
      this.projectList[newName].name = newName;

      this.removeProject(oldName);
    }
  }
}
