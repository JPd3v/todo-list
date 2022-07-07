import Project from "./projects"
import { pubsub } from "./pubSub"

export default class ProjectList {
    constructor() {
        this.projects = []
    }
    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName)
    }

    addProject(name) {
        this.projects.push(new Project(name))
        pubsub.publish("projectList", this.projects)
        console.log(this.projects)
    }

    deleteProject(name) {
        let index = this.projects.findIndex(e => e.name === name)
        this.projects.splice(index, 1)
        pubsub.publish("projectList", this.projects)
        console.log(this.projects)
    }
}

let projectList = new ProjectList
projectList.addProject("hola")

pubsub.subscribe("createNewProject", (title) => {
    projectList.addProject(title)
    console.log(title)
    console.log(projectList)
})

pubsub.subscribe("deletedAProject", (title) => {
    projectList.deleteProject(title)
    console.log(title)
    console.log(projectList)
})

pubsub.subscribe("createNewTask", ({ title, description, dueDate, projectName }) => {
    projectList.getProject(projectName).addNewTasks({ title, description, dueDate })
})

pubsub.subscribe("deletedATodoTask", ({ name, projectName }) => {
    projectList.getProject(projectName).deleteTask(name)
})

pubsub.subscribe("dueDateEdited",({name,title,dueDate})=>{
    projectList.getProject(name).getTask(title).editDueDate(dueDate)
})



