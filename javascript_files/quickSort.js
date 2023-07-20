async function partitionLomuto(ele, l, r) {
  let i = l - 1;
  // color pivot element
  ele[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    // color current element
    ele[j].style.background = "yellow";
    // pauseChamp
    await waitforme(speed);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;
      swap(ele[i], ele[j]);
      // color

      ele[i].style.background = "orange";
      if (i != j) ele[j].style.background = "orange";

      await waitforme(speed);
    } else {
      // color if not less than pivot
      ele[j].style.background = "pink";
    }
  }
  i++;

  await waitforme(speed);
  swap(ele[i], ele[r]);

  ele[r].style.background = "pink";
  ele[i].style.background = "green";

  await waitforme(speed);

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "green") ele[k].style.background = "black";
  }

  return i;
}

async function quickSort(ele, l, r) {
  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}

// calls quicksort on bars with l = 0, r = arr.length - 1
async function quickSortStartup() {
  const ele = document.querySelectorAll(".bar");
  let left = 0;
  let right = ele.length - 1;
  await quickSort(ele, left, right);
}
