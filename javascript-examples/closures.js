const createPerson = (namePerson, agePerson) => {
  let person = {
    name: namePerson,
    age: agePerson,
  };

  return {
    setName: (newName) => {
      person.name = newName;
    },
    setAge: (newAge) => {
      person.age = newAge;
    },

    getPerson: () => {
      return person;
    },
  };
};

let person = createPerson("Edilberto", "23");

console.log(person.getPerson());

person.setName("Maria");
person.setAge(20);

console.log(person.getPerson());
