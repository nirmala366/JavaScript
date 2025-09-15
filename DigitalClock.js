function showClock() {
  let now = new Date();
  let time = now.toLocaleTimeString();
  console.log(time);
}

setInterval(showClock, 1000);
