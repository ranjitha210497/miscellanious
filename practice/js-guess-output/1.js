let randomValue = { name: "Kiran" };
randomValue = 23;
console.log(!typeof randomValue);
if (!typeof randomValue === "string") {
  console.log("its not a string");
} else {
  console.log("its a string");
}
