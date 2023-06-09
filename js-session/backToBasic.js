// k();
// console.log(x);
// var x = 1;
// console.log(k);
// console.log(a);
// console.log(n, m);
// function k() {
//   return 1;
// }
// var a = function () {
//   return 2;
// };
// let n = 1;
// const m = 2;
// function one() {
//   var n = 10;
//   console.log(n);
// }
// function two() {
//   var n = 100;
//   console.log(n);
// }
// let n = 1;
// {
//   n = 2;
//   n = 3;
// }
// console.log(n);

// const a = () => console.log(1);
// a();

let ab = 3;
{
  ab = 4;
}
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
console.log(ab);
