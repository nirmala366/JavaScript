let todos = [];

function addTask(task) {
  todos.push(task);
  console.log("Task added:", task);
}

function showTasks() {
  console.log("Your Tasks:");
  todos.forEach((task, index) => {
    console.log(index + 1 + ". " + task);
  });
}

addTask("Learn JavaScript");
addTask("Build Projects");
showTasks();


// Output---
Task added: Learn JavaScript
Task added: Build Projects
Your Tasks:
1. Learn JavaScript
2. Build Projects
