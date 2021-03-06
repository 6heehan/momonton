const todo = document.querySelector(".todo-js");
const inputTodo = document.querySelector(".todo-input");
const listTodo = document.querySelector(".todo-list");

const LS_TODO = "todo_list";
let todoList = [];

function handleClick(event) {
  const btn = event.target;
  console.log(btn);
  const li = btn.parentNode;
  listTodo.removeChild(li);
  const cleanTodo = todoList.filter(function (todo) {
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
  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = todoList.length + 1;

  listTodo.appendChild(li);

  delBtn.addEventListener("click", handleClick);

  const tempObj = {
    text: text,
    id: todoList.length + 1
  };

  todoList.push(tempObj);
  const saveLS = JSON.stringify(todoList);
  localStorage.setItem(LS_TODO, saveLS);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputTodoValue = inputTodo.value;
  inputTodo.value = "";
  console.log(inputTodoValue);
  paintTodo(inputTodoValue);
}

function init() {
  todo.addEventListener("submit", handleSubmit);
  const loadTodoList = JSON.parse(localStorage.getItem(LS_TODO));
  if (loadTodoList !== null) {
    loadTodoList.forEach(function (todo) {
      paintTodo(todo.text);
    });
  }
}

init();
