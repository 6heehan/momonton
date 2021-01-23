const time = document.querySelector(".time-js");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  
  time.innerText = `${hour<10 ? `0${hour}` : hour}:${min<10 ? `0${min} : min}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
