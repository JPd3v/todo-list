import Task from "./task";

export default class Project{
    constructor(name){
        this.name = name;
        this.taskList = []
        this.taskList.push(new Task("titulo1", "description1", "dueDate1"))
        this.taskList.push(new Task("titulo2", "description2", "dueDate2"))
       
    }

    addNewTasks({title, description, dueDate}){
        this.taskList.push(new Task(title, description, dueDate))
    }

    deleteTask(title){
        let index =this.tasksList.findIndex(e => e.title === title)
        this.tasksList.splice(index, 1)
    }
}

