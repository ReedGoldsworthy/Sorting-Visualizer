var size = 20;
var speed = 100;

const array = [];
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

// function to draw a new array of random numbers to the screen
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
}

function play() {
  bubbleSort();
}

//sorts the array and stores the switches into an array
async function bubbleSort(array) {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await waitforme(speed);

        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "black";
      ele[j + 1].style.background = "black";
    }

    ele[ele.length - 1 - i].style.background = "green";
  }
  ele[0].style.background = "green";
}

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  console.log("In swap()");

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 300 - milisec);
  });
}
