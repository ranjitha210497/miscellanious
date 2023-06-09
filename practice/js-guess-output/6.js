function checkOcc(data) {
  if (data == { occ: "engineer" }) {
    console.log("you are an engineer");
  } else if (data == { occ: "engineer" }) {
    console.log("You are still an engineer");
  } else {
    console.log("You dont work");
  }
}

console.log(checkOcc({ occ: "engineer" }));
