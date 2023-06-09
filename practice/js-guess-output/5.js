let person = { name: "Kiran" };

function helloBuddy(occupation) {
  return `${this.name} is working as ${occupation}`;
}

console.log(helloBuddy.call(person, "engineer"));
//outputs kiran is working as an engineer
//call calls immediately

console.log(helloBuddy.bind(person, "engineer"));
// outputs [Function: bound helloBuddy]

const hello = helloBuddy.bind(person, "engineer");

// bind just binds function to that object , you need to call it explicitly

console.log(helloBuddy.bind(person, "engineer")());
