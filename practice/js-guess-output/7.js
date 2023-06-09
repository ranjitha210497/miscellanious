function getPersonInfo(one, two, three) {
  console.log(one, two, three);
}

const person = "kiran";

const occ = "Engineer";

getPersonInfo`${person} is working as ${occ}`;
