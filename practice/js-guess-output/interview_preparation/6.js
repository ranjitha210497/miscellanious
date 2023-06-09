const person = { name: "Kiran" };

// Object.seal(person);

person.age = 23;
delete person.name;

person.name = "New Kiran";

console.log(person);
