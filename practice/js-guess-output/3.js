const animals = {};

let dog = { emoji: "🐶" };

let cat = { emoji: "🐱" };

animals[dog] = { ...dog, name: "jony" };
animals[cat] = { ...cat, name: "sara" };

console.log(animals[dog]);
