import { pubsub } from "./pubSub"


let tasksList = []

export default class Task {
    constructor(title, description, dueDate) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate
    }
    
}

pubsub.subscribe("deletedATodoTask",deleteTaskFromList)

function deleteTaskFromList(title){
    let index =tasksList.findIndex(e => e.title === title)
    tasksList.splice(index, 1)
    console.log(tasksList)
}

pubsub.subscribe("createNewTask", addTaskToList)

function addTaskToList({ title, description, dueDate }) {
    tasksList.push(new Task(title, description, dueDate))
    console.log(tasksList)
    pubsub.publish("taskListAdd",tasksList)
}

