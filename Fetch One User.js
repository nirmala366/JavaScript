// Fetch details of user with ID = 1
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())  // convert response to JSON
  .then(data => {
    console.log("User Name:", data.name);
    console.log("Email:", data.email);
    console.log("City:", data.address.city);
  })
  .catch(error => console.log("Error:", error));

// OUTPUT ---
User Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
