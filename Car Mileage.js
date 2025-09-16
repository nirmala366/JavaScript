class Car {
  constructor(brand, mileage) {
    this.brand = brand;
    this.mileage = mileage;
  }

  showDetails() {
    console.log("Brand:", this.brand, "| Mileage:", this.mileage, "km/l");
  }
}

let car1 = new Car("Hyundai", 20);
let car2 = new Car("Maruti", 25);

car1.showDetails();
car2.showDetails();

// OUTPUT ---
Brand: Hyundai | Mileage: 20 km/l
Brand: Maruti | Mileage: 25 km/l
