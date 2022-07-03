import { pubsub } from "./pubSub"

export default class Todo {
    constructor(title, description, dueDate) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate
    }
}



let tasksList = []

pubsub.subscribe("createNewTask", addTaskToList)

function addTaskToList({ title, description, dueDate }) {
    tasksList.push(new Todo(title, description, dueDate))
    console.log(tasksList)
    pubsub.publish("taskListAdd",tasksList)
}
