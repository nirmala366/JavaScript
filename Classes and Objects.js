// Define a class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  // Method inside class
  displayInfo() {
    console.log("Car:", this.brand, this.model);
  }
}

// Create objects
let car1 = new Car("Toyota", "Innova");
let car2 = new Car("Tesla", "Model 3");

// Call method
car1.displayInfo();
car2.displayInfo();

// OUTPUT ---
Car: Toyota Innova
Car: Tesla Model 3
