import { pubsub } from "./pubSub"

let mainContainer = document.querySelector(".main-container")

function addNewTasks() {
    deleteButton()
    createTaskForm()
}

function createNewButton() {
    let addButton = document.createElement("button")
    addButton.classList.add("btn-add-todo")
    addButton.textContent = "+ add a new task"
    addButton.addEventListener("click", addNewTasks)
    mainContainer.appendChild(addButton)
}

function deleteButton() {
    let addButton = document.querySelector(".btn-add-todo")
    addButton.remove()
}

function createTaskForm() {
    let divContainer = document.createElement("div")
    let title = document.createElement("input")
    let description = document.createElement("input")
    let dueDate = document.createElement("input")
    let buttonCreateTask = document.createElement("button")
    let buttonCancel = document.createElement("button")

    divContainer.classList.add("new-task-form")

    title.placeholder = "Title"
    description.placeholder = "Description"
    dueDate.type = "date"

    buttonCreateTask.addEventListener("click",() =>{
        createNewTask(title.value, description.value, dueDate.value)
    })
    buttonCreateTask.classList.add("create-task")
    buttonCreateTask.textContent = "Create New Task"
    buttonCancel.addEventListener("click", cancelTaskForm)
    buttonCancel.textContent = "Cancel"

    mainContainer.appendChild(divContainer)
    divContainer.appendChild(title)
    divContainer.appendChild(description)
    divContainer.appendChild(dueDate)
    divContainer.appendChild(buttonCreateTask)
    divContainer.appendChild(buttonCancel)
}

function deleteTaskForm() {
    let form = document.querySelector(".new-task-form")
    form.remove()
}

function cancelTaskForm() {
    deleteTaskForm()
    createNewButton()
}

function createNewTask(title,description,dueDate) {
    pubsub.publish("createNewTask", submitForm(title,description,dueDate))
    deleteTaskForm()
    createNewButton()
}

function submitForm(title, description, dueDate) {
    return { title, description, dueDate }
}

pubsub.subscribe("taskListAdd", rederTaskList)
function rederTaskList(array) {
    console.log(array)
    for (const element in array) {
        console.log(element.title)
    }
}

export {
    createNewButton
}

