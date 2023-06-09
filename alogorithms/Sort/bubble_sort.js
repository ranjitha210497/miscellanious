function bubbleSort(array) {
  let arr = array;
  let swap = true;
  while (swap) {
    swap = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([-6, 20, 4, 2, 8, 5, 3, 7, 1, 12, 6]));

// Big O is O(n^2)
