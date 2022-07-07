import { pubsub } from "./pubSub"

let mainContainer = document.querySelector(".main-container")
let sidebar = document.querySelector(".sidebar")
let tasksContainer = document.querySelector(".tasks-container")
let projectsContainer = document.querySelector(".projects-container")

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

    projectsContainer.appendChild(formContainer)
    formContainer.appendChild(title)
    formContainer.appendChild(acceptButton)
    formContainer.appendChild(cancelButton)
}

function addProject(title) {
    let projectDiv = document.createElement("div")
    let projectTitle = document.createElement("div")
    let deleteButton = document.createElement("button")

    projectDiv.classList.add("project")
    projectDiv.setAttribute("data-title", title)
    projectTitle.textContent = title

    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", e => deleteProject(e))

    projectsContainer.appendChild(projectDiv)
    projectDiv.appendChild(projectTitle)
    projectDiv.appendChild(deleteButton)
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
    deleteDomElement("btn-add-project")
    addProjectForm()
}

function deleteProjectForm() {
    let form = document.querySelector(".project-form")
    form.remove()
}

function addNewProjectAndCleanDom(title) {
    pubsub.publish("createNewProject", title)
    createNewProjectButton()
}

function deleteProject(e) {
    let item = e.target.closest(".project");
    let title = item.dataset.title;
    tasksContainer.innerHTML = ""
    pubsub.publish("deletedAProject", title)
    item.remove()
}

pubsub.subscribe("projectList", rederprojectList)
function rederprojectList(array) {
    projectsContainer.innerHTML = ""
    for (const element of array) {
        addProject(element.name)
    }
}

pubsub.subscribe("projectList", assignProjectObject)
function assignProjectObject(projectarray) {
    let domProjects = document.querySelectorAll(".project")
    let domProjectsArray = Array.from(domProjects)

    for (let i = 0; i < projectarray.length; i++) {
        domProjectsArray[i].addEventListener("click", () => {
            rederTaskList(projectarray[i].taskList, projectarray[i])
        })
    }
}

function addNewTasks() {
    deleteDomElement("btn-add-todo")
    createTaskForm()
}

function createNewButton() {
    let addButton = document.createElement("button")
    addButton.classList.add("btn-add-todo")
    addButton.textContent = "+ add a new task"
    addButton.addEventListener("click", addNewTasks)
    tasksContainer.appendChild(addButton)
}

function deleteDomElement(buttonClass) {
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

    tasksContainer.appendChild(divContainer)
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
    appendNewTask(title, description, dueDate)
    createNewButton()
}

function submitForm(title, description, dueDate) {
    let projectName = document.querySelector(".project-name").textContent
    return { title, description, dueDate, projectName }
}

function rederTaskList(array, project) {
    tasksContainer.innerHTML = ""
    appendProjectName(project)
    for (const element of array) {
        appendNewTask(element.title, element.description, element.dueDate)
    }
    createNewButton()
}

function appendProjectName(project) {
    let projectName = document.createElement("h2")
    projectName.classList.add("project-name")
    projectName.textContent = project.name
    tasksContainer.appendChild(projectName)
}

function appendNewTask(tit, desc, date) {
    let divContainer = document.createElement("div")
    let title = document.createElement("div")
    let description = document.createElement("div")
    let dueDate = document.createElement("input")
    let deleteButton = document.createElement("button")

    divContainer.classList.add("task")
    divContainer.setAttribute("data-title", tit)
    title.textContent = `title: ${tit}`
    title.classList.add("title")
    description.textContent = `description: ${desc}`
    dueDate.setAttribute("type", "date")
    dueDate.value = date
    dueDate.classList.add("task-date")
    deleteButton.textContent = "X"

    dueDate.addEventListener("change", (e) => {
        editDueDate(e)
    })

    deleteButton.addEventListener("click", (e) => {
        deleteTodoTask(e)
    })

    tasksContainer.appendChild(divContainer)
    divContainer.appendChild(title)
    divContainer.appendChild(description)
    divContainer.appendChild(dueDate)
    divContainer.appendChild(deleteButton)
}

function editDueDate(data) {
    let name = document.querySelector(".project-name").textContent
    let title = data.target.closest(".task").dataset.title
    let dueDate = data.target.value
    pubsub.publish("dueDateEdited", { name, title, dueDate })
}

function deleteTodoTask(e) {
    let projectName = document.querySelector(".project-name").textContent
    let item = e.target.closest(".task");
    let name = item.dataset.title;
    pubsub.publish("deletedATodoTask", { name, projectName })
    item.remove()
}

function displayDefaultProject() {
    let defaultProject = document.querySelector(".project")
    defaultProject.click()
}

function renderOnload() {
    displayDefaultProject()
    createNewProjectButton()
}

export {
    renderOnload
}

