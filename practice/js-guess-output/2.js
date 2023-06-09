const user = {
  email: "myemail@gmail.com",
  updateEmail: function (email) {
    this.email = email;
  },
};

user.updateEmail("newemail@gmail.com");

console.log(user.email);
