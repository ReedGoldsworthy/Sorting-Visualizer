async function selectionSort() {
  //turn off other sorting buttons
  disableButtonsByClassName("btn");

  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let minIdx = i;

    //set current idx to blue
    ele[i].style.background = "blue";

    for (let j = i + 1; j < ele.length; j++) {
      // bar being searched is set to red
      ele[j].style.background = "red";

      await waitforme(speed);
      if (parseInt(ele[j].style.height) < parseInt(ele[minIdx].style.height)) {
        if (minIdx != i) {
          // new minIdx is found so change prev minIdx color back to normal
          ele[minIdx].style.background = "black";
        }

        // new min found, keep it red
        minIdx = j;
      } else {
        // if curr element is bigger than minIdx, change curr back to black
        ele[j].style.background = "black";
      }
    }
    await waitforme(speed);
    swap(ele[minIdx], ele[i]);

    // change the min element index back to normal as it is swapped
    ele[minIdx].style.background = "black";

    // change sorted elements color to green
    ele[i].style.background = "green";
  }

  //turn on sorting buttons
  enableButtonsByClassName("btn");
}
