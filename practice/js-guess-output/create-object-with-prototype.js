// How do you create an object with prototype

const user = {
  name: "Kirandeep",
};

const anotherUser = Object.create(user);

console.log(anotherUser.name);
