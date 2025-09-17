let promise = new Promise((resolve, reject) => {
  let friendCame = true;  // change to false to see reject

  if (friendCame) {
    resolve("Friend kept promise 🤝");
  } else {
    reject("Friend broke promise 💔");
  }
});

promise
  .then(msg => console.log(msg))   // success
  .catch(err => console.log(err)) // failure
  .finally(() => console.log("Day over 🌙"));
