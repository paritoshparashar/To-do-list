import Project from "./projectCreation";
import checkPropertyExists from "./propertyExists";

let projects = new ProjectList ();

class ProjectList {

    constructor (){
        this.projectList = {};
    }

    addProject (projName) {

        projectList[projName] = new Project (projName);
    
    }

    removeProject (projName) {
        
        if (checkPropertyExists(this.projectList , projName)) {
            this.projectList[projName];
        }
        
    }

    renameProj (projName, newName) {
        if (checkPropertyExists(this.projectList , projName)) {
            this.projectList[projName].projName = newName;
        }
    }
}

