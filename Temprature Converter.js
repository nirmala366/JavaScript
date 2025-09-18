function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5/9;
}

console.log("30°C =", celsiusToFahrenheit(30), "°F");
console.log("86°F =", fahrenheitToCelsius(86), "°C");
