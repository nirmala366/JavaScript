class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log("Name:", this.name, "Age:", this.age);
  }
}

let s1 = new Student("Gowda", 20);
let s2 = new Student("Ramesh", 22);

s1.display();
s2.display();

// Output ---
Name: Gowda Age: 20
Name: Ramesh Age: 22
