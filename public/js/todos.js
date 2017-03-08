function getTodos() {

fetch('http://localhost:3000/todos')
        .then(response => response.json()) 
        .then(loopTodos());
}

function loopTodos(todos) {
    todos.forEach(function(todo){
        showTodo(todo);
    }
)}

function showTodo(todo) {
    var todo = `<li class="list-group-item">
                    ${todo.todo}
                </li>`;
  document.querySelector('#todos').innerHTML += todo;  
}

getTodos();
