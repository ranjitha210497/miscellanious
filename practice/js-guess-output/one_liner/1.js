console.log(!!null);
console.log(!!"");
console.log(!!1);

console.log(+true);
console.log(+false);
console.log(!"Kirandeep");

console.log(!!0); //falsy
console.log(!!new Number(0)); //truthy becoz function constructors are always truthy
console.log(!!""); //falsy
console.log(!!" "); //truthy
console.log(!!new Boolean(false)); //truthy becoz function constructors are always truthy
console.log(!!undefined); //falsy

console.log(eval("10*10+5"));
console.log([..."KIRANDEEP"]);

console.log(3 + 4 + "5");
console.log(parseInt("7*6", 10));
console.log(parseInt("7F6", 16));

console.log(Number(2) === Number(2));
console.log(Boolean(true) === Boolean(true));
console.log(Symbol("Ranju") === Symbol("Ranju"));

console.log("🐶" + "🐱");
console.log(String.raw`Hello\nworld`);
console.log(`hello\tworld`);
console.log("I want ice cream"[1]);
console.log("I want ice cream".charAt(0));
console.log(false || {} || null);
console.log(null || false || "");
console.log([] || 0 || false);
console.log("🐱" === "🐱");

// what are the three phases of event propagation?
