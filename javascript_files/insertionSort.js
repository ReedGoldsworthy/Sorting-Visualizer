async function insertionSort() {
  //disable all buttons
  disableButtonsByClassName("btn");
  const ele = document.querySelectorAll(".bar");

  ele[0].style.background = "green";
  for (let i = 1; i < ele.length; i++) {
    ele[i - 1].style.background = "green";
    let j = i;
    await waitforme(speed);
    ele[i].style.background = "red";
    await waitforme(speed);

    while (
      j > 0 &&
      parseInt(ele[j - 1].style.height) > parseInt(ele[j].style.height)
    ) {
      ele[j].style.background = "red";
      await waitforme(speed);
      swap(ele[j], ele[j - 1]);
      ele[j].style.background = "red";
      await waitforme(speed);

      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "green";
      }
      j = j - 1;
    }
    ele[i].style.background = "green";
    await waitforme(speed);
  }

  //enables buttons after animation is done
  enableButtonsByClassName("btn");
}
