const name = document.querySelector(".name-js");
const LS_NAME = "UserName";

function paintName(text) {
  //name.innerText = `Hello! ${name} Have a good Day !`;
  const input = name.querySelector("input");
  if(input !== null) {
    name.removeChild(input);
  }
  const h4 = document.createElement("h4");
  h4.innerText = `Hello! ${text} Have a good Day !`;
  name.appendChild(h4);
}

function handleSubmit(event) {
  event.preventDefault();
  //console.log(event.target);
  const input = event.target.querySelector("input");
  const nameValue = input.value;
  localStorage.setItem(LS_NAME,nameValue);
  paintName(nameValue);
}

function askName() {
  const input = document.createElement("input");
  input.placeholder = "What's your name??";
  input.type = "text";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  name.appendChild(form);
}

function init() {
  const loadName = localStorage.getItem(LS_NAME);
  if(loadName === null) {
    askName();
  } else {
    paintName(loadName);
  }
}

init();
