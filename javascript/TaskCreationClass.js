class Task {

    constructor (title, detail, date) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.completed = false;
        this.important = false;
    }
}

export default Task;