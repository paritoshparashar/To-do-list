import Project from "./ProjectCreationClass";
import checkPropertyExists from "./propertyExistsMethod";

class ProjectList {

    constructor (){
        this.projectList = {};
    }

    addProject (projName) {

        this.projectList[projName] = new Project (projName);
    
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


