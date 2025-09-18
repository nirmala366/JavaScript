class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
  }
}

class StudentManager {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
    console.log("Student added ✅");
  }

  removeStudent(id) {
    this.students = this.students.filter(s => s.id !== id);
    console.log("Student removed ❌");
  }

  listStudents() {
    console.log("All Students:");
    this.students.forEach(s => s.showInfo());
  }
}

// Usage
let manager = new StudentManager();
manager.addStudent(new Student(1, "Gowda", 20));
manager.addStudent(new Student(2, "Ramesh", 22));
manager.listStudents();
manager.removeStudent(1);
manager.listStudents();
