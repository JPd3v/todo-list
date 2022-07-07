import Task from "./task";

export default class Project {
    constructor(name) {
        this.name = name;
        this.taskList = []
    }

    getName() {
        return this.name
    }

    getTask(title) {
        return this.taskList.find((task) => task.title === title)
      }
    
    addNewTasks({ title, description, dueDate }) {
        this.taskList.push(new Task(title, description, dueDate))
    }

    deleteTask(title) {
        let index = this.taskList.findIndex(e => e.title === title)
        this.taskList.splice(index, 1)
    }
}

