function prime(n) {
  let prime = true;
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      prime = false;
    }
  }
  return prime;
}

console.log(prime(6));

//Big O is O(sqrt(n))
