const todo = document.querySelector(".todo-js");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");

const LS_TODO = "todo_list";
const todoList = [];

function handleClick(event) {
  const btn = event.tagert;
  const li = btn.parentNode;
  list.removeChild(li);
  const cleanTodo = todoList.filter(function(todo){
    return parseInt(li.id) !== todo.id;
  });
  todoList = cleanTodo;
  const saveLS = JSON.stringify(todoList);
  localStorage.setItem(LS_TODO, saveLS);
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleClick);
  span.innerText = text;
  
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = todoList.length + 1;
  
  list.appendChild(li);
  const tempObj = {
    text: text,
    id: id
  };
  
  todoList.push(tempObj);
  const saveLS = JSON.stringify(todoList);
  localStorage.setItem(LS_TODO, saveLS);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputTodo = input.value;
  input.value = "";
  paintTodo(inputTodo);
}

function init() {
  input.addEventListener("submit", handleSubmit);
  const loadTodoList = JSON.parse(localStorage.getItem(LS_TODO));
  if(loadTodoList !== null) {
    loadTodoList.forEach(function(todo){
      paintTodo(todo.text);
    });
  }
}

init();
