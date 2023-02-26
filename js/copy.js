// for clining object:(Deep Cloning)
const person={
    name:"emon",
    age:21,
}
console.log(person);

const personCopy = JSON.parse(JSON.stringify(person)); // copy done.

// updating for check and all so copying is done
personCopy.age=22;
console.log(personCopy);