import Task from "./task"
import Project from "./projects"
import { pubsub } from "./pubSub"



export default class ProjectList{
    constructor(){
        this.projects = []
    }

    addProject(name){
        this.projects.push(new Project(name))
        pubsub.publish("projectList",this.projects)
        
        console.log(this.projects)
    }

    deleteProject(name){
        let index =this.projects.findIndex(e => e.name === name)
        this.projects.splice(index, 1)
        console.log(this.projects)
    }
   
}

let projectList = new ProjectList
// projectList.addProject("My Tasks")


pubsub.subscribe("createNewProject",(title)=>{
    projectList.addProject(title)
    console.log(title)
    console.log(projectList)
})

pubsub.subscribe("deletedAProject", (title)=>{
    projectList.deleteProject(title)
    console.log(title)
    console.log(projectList)
})


let title = "Create"
let description = "asd"
let dueDate="312"

// console.log(projectList)
// console.log(projectList.projects)
// // projectList.projects[0].addNewTasks({title, description, dueDate})

// console.log(projectList.projects)
// // console.log(projectList.projects[0].taskList)
// console.log(projectList.projects.name)
// // console.log(projectList.projects[0])

// // console.log(projectList.projects[0].taskList)


