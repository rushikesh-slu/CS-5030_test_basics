class todoservice {
    todo_data = { "todo": [
        { "id": 1, "title": "Learn React", "completed": false }, 
        { "id": 2, "title": "Learn Node", "completed": false }, 
        { "id": 3, "title": "Learn Express", "completed": false }] };
    constructor() {
        this.todos = this.todo_data;
    }

    get_todos() {
        console.log('in get todo')
        return this.todos;
    }

    add_todo(todo) {
        
        this.todo_data["todo"].push(todo)
        this.todos = this.todo_data;

        return "item added"
    }

    delete_todo(id) {
        this.todo_data["todo"] = this.todo_data["todo"].filter(function(item) {
            return item.id !== id
        })
        this.todos = this.todo_data;
        return "item deleted"
    }

    update_todo(id, todo) {

        for (let i in this.todo_data["todo"]){
            if (this.todo_data["todo"][i]["id"] == id){
                this.todo_data["todo"][i]["title"] = todo.title
                this.todo_data["todo"][i]["completed"] = todo.completed
            }
        }
        return "item updated"
        
    }
}


module.exports = todoservice;