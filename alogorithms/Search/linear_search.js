const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function linearSearch(number) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(9));

// Big O is O(n)
