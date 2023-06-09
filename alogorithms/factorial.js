function factorial(n) {
  factorial = 1;
  for (i = 2; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(factorial(3));
