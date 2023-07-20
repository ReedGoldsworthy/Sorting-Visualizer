// Function bubblesorts the bar elements by height and colors them (Green->sorted, Red->In progress)
async function bubbleSort(array) {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = "red";
      ele[j + 1].style.background = "red";
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
