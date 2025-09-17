// Synchronous
console.log("Boil water");
console.log("Add masala");
console.log("Eat noodles");

// Asynchronous
console.log("Start cooking");
setTimeout(() => {
  console.log("Water boiled after 2 sec");
}, 2000);
console.log("Meanwhile, scroll Insta");
