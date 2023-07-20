// Global variables that set the number of elements and sorting speed
var size = 20;
var speed = 80;

const array = [];

// create an array of random numbers
createNewArray();

const size_slider = document.getElementById("size-input");
const speed_slider = document.getElementById("speed_input");

// Event listener to update the size of the random numbers array and draw it to the screen
size_slider.addEventListener("input", function () {
  size = this.value;
  createNewArray();
});

// Event listener to update the delay value which changes the speed of sorting
speed_slider.addEventListener("input", function () {
  speed = this.value;
});

// function to fill array with elements of random height
function createNewArray() {
  for (let i = 0; i < size; i++) {
    array[i] = Math.random();
  }

  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
  }

  enableButtonsByClassName("btn");
}

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  console.log("In swap()");

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// util function used in the sorting functions to add a delay and create animations
function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 400 - milisec);
  });
}

// function to disable by class name
function disableButtonsByClassName(className) {
  const buttons = document.querySelectorAll("." + className);
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

// function to enable by class name
function enableButtonsByClassName(className) {
  const buttons = document.querySelectorAll("." + className);
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
