

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });


    test("add_todo",()=>{
        let c = todo_service.get_todos().todo.length
        todo_service.add_todo({ "id": 4, "title": "Learn Java", "completed": false })
        expect(todo_service.get_todos().todo.length).toEqual(c+1);
    })
    

    // Write all your test cases here that corresponds to software requirements


});