import { pubsub } from "./pubSub"

let mainContainer = document.querySelector(".main-container")
let sidebar = document.querySelector(".sidebar")
let tasksContainer = document.querySelector(".tasks-container")
let proyectsContainer = document.querySelector(".proyects-container")

function addProjectForm() {
    let formContainer = document.createElement("div")
    let title = document.createElement("input")
    let acceptButton = document.createElement("button")
    let cancelButton = document.createElement("button")

    formContainer.classList.add("project-form")
    title.placeholder = "title"
    acceptButton.textContent = "create"
    cancelButton.textContent = "cancel"

    acceptButton.addEventListener("click", () => { addNewProjectAndCleanDom(title.value) })
    cancelButton.addEventListener("click", cancelProjectForm)

    proyectsContainer.appendChild(formContainer)
    formContainer.appendChild(title)
    formContainer.appendChild(acceptButton)
    formContainer.appendChild(cancelButton)
}

function addProject(title) {
    let proyectDiv = document.createElement("div")
    let proyectTitle = document.createElement("div")
    let deleteButton = document.createElement("button")

    proyectDiv.classList.add("proyect")
    proyectDiv.setAttribute("data-title", title)
    proyectTitle.textContent = title

    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", e => deleteProject(e))

    proyectsContainer.appendChild(proyectDiv)
    proyectDiv.appendChild(proyectTitle)
    proyectDiv.appendChild(deleteButton)
}

function createNewProjectButton() {
    let addButton = document.createElement("button")
    addButton.classList.add("btn-add-project")
    addButton.textContent = "Add a new project"
    addButton.addEventListener("click", addNewProject)
    sidebar.appendChild(addButton)
}

function cancelProjectForm() {
    deleteProjectForm()
    createNewProjectButton()
}

function addNewProject() {
    deleteButton("btn-add-project")
    addProjectForm()
}

function deleteProjectForm() {
    let form = document.querySelector(".project-form")
    form.remove()
}

function addNewProjectAndCleanDom(title) {
    pubsub.publish("createNewProject",title)
    addProject(title)
    deleteProjectForm()
    createNewProjectButton()
}

function deleteProject(e) {
    let item = e.target.closest(".proyect");
    let name = item.dataset.title;
    console.log(name)
    // pubsub.publish("deletedATodoTask", name)
    item.remove()
}


function addNewTasks() {
    deleteButton("btn-add-todo")
    createTaskForm()
}

function createNewButton() {
    let addButton = document.createElement("button")
    addButton.classList.add("btn-add-todo")
    addButton.textContent = "+ add a new task"
    addButton.addEventListener("click", addNewTasks)
    mainContainer.appendChild(addButton)
}

function deleteButton(buttonClass) {
    let addButton = document.querySelector(`.${buttonClass}`)
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

    buttonCreateTask.addEventListener("click", () => {
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

function createNewTask(title, description, dueDate) {
    pubsub.publish("createNewTask", submitForm(title, description, dueDate))
    deleteTaskForm()
    createNewButton()
}

function submitForm(title, description, dueDate) {
    return { title, description, dueDate }
}

pubsub.subscribe("taskListAdd", rederTaskList)
function rederTaskList(array) {
    tasksContainer.innerHTML = ""
    for (const element of array) {
        appendNewTask(element.title, element.description, element.dueDate)
    }
}

function appendNewTask(tit, desc, date) {
    let divContainer = document.createElement("div")
    let title = document.createElement("div")
    let description = document.createElement("div")
    let dueDate = document.createElement("input")
    let deleteButton = document.createElement("button")

    divContainer.classList.add("task")
    divContainer.setAttribute("data-title", tit)
    title.textContent = tit
    title.classList.add("title")
    description.textContent = desc
    dueDate.setAttribute("type", "date")
    dueDate.value = date
    dueDate.classList.add("task-date")
    deleteButton.textContent = "X"

    deleteButton.addEventListener("click", (e) => {
        deleteTodoTask(e)
    })

    tasksContainer.appendChild(divContainer)
    divContainer.appendChild(title)
    divContainer.appendChild(description)
    divContainer.appendChild(dueDate)
    divContainer.appendChild(deleteButton)
}

function deleteTodoTask(e) {
    let item = e.target.closest(".task");
    let name = item.dataset.title;
    console.log(name)
    pubsub.publish("deletedATodoTask", name)
    item.remove()
}

export {
    createNewButton,
    rederTaskList,
    createNewProjectButton
}

// publicar info de cuando se elimina una task de cierto proyecto
// pubsub.publish("deletedATodoTaskInSomeProyect", {ProyectName,TaskName})