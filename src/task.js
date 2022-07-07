
export default class Task {
    constructor(title, description, dueDate) {
        this.title = title,
            this.description = description,
            this.dueDate = dueDate
    }

    getTitle() {
        return this.title
    }

    getDueDate() {
        return this.dueDate
    }

    editDueDate(dueDate) {
         this.dueDate = dueDate
    }
}
