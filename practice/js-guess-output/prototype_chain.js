// circle rectangle shape

function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return this.first + " " + this.last;
};

const p1 = new Person("k", "j", 12);

console.log(p1.getFullName());
