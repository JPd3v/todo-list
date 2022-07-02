
let mainContainer = document.querySelector(".main-container")

function addNewTasks(){
    deleteButton()
    createTaskForm()
}


function createNewButton(){
    let addButton = document.createElement("button")
    addButton.classList.add("btn-add-todo")
    addButton.textContent = "+ add a new task"
    addButton.addEventListener("click",addNewTasks)
    mainContainer.appendChild(addButton)
}

function deleteButton(){
    let addButton = document.querySelector(".btn-add-todo")
    addButton.remove()
}

function createTaskForm(){
    let divContainer= document.createElement("div")
    let form = document.createElement("form")
    let title = document.createElement("input")
    let description = document.createElement("input")
    let dueDate = document.createElement("input")
    let priorityHighLabel = document.createElement("label")   
    let priorityMediumLabel = document.createElement("label")
    let priorityLowLabel = document.createElement("label")
    let priorityHigh = document.createElement("input")
    let priorityMedium = document.createElement("input")
    let priorityLow = document.createElement("input")
    let buttonCreateTask = document.createElement("button")
    let buttonCancel = document.createElement("button")

    divContainer.classList.add("new-task-form")
    
    

    title.placeholder="Title"
    description.placeholder="Description"
    dueDate.type="date"

    priorityHighLabel.textContent="high"
    priorityHigh.name="priority"
    priorityHigh.type="radio"
    priorityHigh.value="high"

    priorityMediumLabel.textContent="medium"
    priorityMedium.name="priority"
    priorityMedium.type="radio"
    priorityMedium.value="medium"

    priorityLowLabel.textContent="low"
    priorityLow.type="radio"
    priorityLow.name="priority"
    priorityLow.value="low"

    buttonCreateTask.addEventListener("click",()=>{console.log("asd")} )
    buttonCreateTask.textContent="Create New Task"
    buttonCancel.addEventListener("click",cancelTaskForm)
    buttonCancel.textContent="Cancel"

    mainContainer.appendChild(divContainer)
    divContainer.appendChild(form)
    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(priorityHighLabel)
    form.appendChild(priorityMediumLabel)
    form.appendChild(priorityLowLabel)
    priorityHighLabel.appendChild(priorityHigh)
    priorityMediumLabel.appendChild(priorityMedium)
    priorityLowLabel.appendChild(priorityLow)
    form.appendChild(buttonCreateTask)
    form.appendChild(buttonCancel)
}

function deleteTaskForm(){
    let form= document.querySelector(".new-task-form")
    form.remove()
}

function cancelTaskForm(){
    deleteTaskForm()
    createNewButton()
}


export {
    createNewButton,
    addNewTasks
}