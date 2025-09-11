let age = 18;
let marks = 75;
let day = 3;

// If Statement
if (age >= 18) {
  console.log("✅ You are an adult");
}

// If-Else Statement
if (age >= 18) {
  console.log("🗳️ You can vote");
} else {
  console.log("❌ You cannot vote");
}

// If-Else If-Else Statement
if (marks >= 90) {
  console.log("🏆 Grade: A");
} else if (marks >= 60) {
  console.log("👍 Grade: B");
} else {
  console.log("👌 Grade: C");
}

// Switch Statement
switch (day) {
  case 1:
    console.log("📅 Monday");
    break;
  case 2:
    console.log("📅 Tuesday");
    break;
  case 3:
    console.log("📅 Wednesday");
    break;
  case 4:
    console.log("📅 Thursday");
    break;
  case 5:
    console.log("📅 Friday");
    break;
  case 6:
    console.log("📅 Saturday");
    break;
  case 7:
    console.log("📅 Sunday");
    break;
  default:
    console.log("❌ Invalid day number");
}

// Output ---
✅ You are an adult
🗳️ You can vote
👍 Grade: B
📅 Wednesday
