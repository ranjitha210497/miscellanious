function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

function isPowerOfTwo(n) {
  let powerOfTwo = true;
  while (n > 1) {
    if (n % 2 !== 0) {
      powerOfTwo = false;
      n = 2;
    } else {
      n = n / 2;
    }
  }
  return powerOfTwo;
}

console.log(isPowerOfTwo(32));
// Big O is O(logn)

console.log(isPowerOfTwoBitWise(32));
