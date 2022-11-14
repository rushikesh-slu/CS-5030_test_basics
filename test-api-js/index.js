var express = require('express');
var app = express();

app.use(express.json());
var todoservice = require('./todo.service.js');

let todo_service = new todoservice();

app.get('/todolist', function (req, res) {
  // console.log('API called with GET:' + req.url);
  
  res.json(todo_service.get_todos());
})

app.get('/addtodo', function (req, res) {
  // console.log('API called with GET:' + req.url);
  let te = Math.floor(Math.random() * 100)
  let td = {
    "title": te,
    "description": "D1",
    "done": false
  }
  res.json(todo_service.add_todo(td));
})

app.get('/delete', function (req, res) {
  res.json(todo_service.delete_todo(1));
})

app.get('/update', function (req, res) {
  res.json(todo_service.update_todo(2, { "id": 2, "title": "Learningg Node", "completed": false }));
})


// Add more api calls here for each requirement

// app.listen(3000, function () {
//   // console.log(' app listening on port 3000!')
// })

module.exports = app;
