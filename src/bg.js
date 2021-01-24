const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber}.png`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function makeRandom() {
  return Math.floor(Math.random() * IMG_NUMBER) + 1;
}
function init() {
  const randomNum = makeRandom();
  paintImage(randomNum);
}

init();
