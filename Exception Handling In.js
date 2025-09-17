try {
  console.log(10 / 0);  // ok, gives Infinity
  throw new Error("Oh no, mistake happened!");
} catch (error) {
  console.log("Teacher caught the mistake:", error.message);
} finally {
  console.log("Exam finished ✅");
}
