function factorial(n) {
  if (n === 0) {
    return 1;  // base case (stop recursion)
  } else {
    return n * factorial(n - 1);  // recursive call
  }
}

console.log("Factorial of 5 is:", factorial(5));

// OUTPUT ---
Factorial of 5 is: 120
