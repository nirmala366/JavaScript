class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(10, 5);
console.log("Area of rectangle:", rect.area());

// OUTPUT ---
Area of rectangle: 50
