const person={
    name:"Emon",
    profession:"student",
    income:12000,
    isSingle:true,
}

const allKeys = Object.keys(person);//it will store all keys in array
console.log(allKeys); 

const values = Object.values(person); //it will store all values in an array
console.log(values);

const pair = Object.entries(person); //it will store all keys and valus as pair in 2D array
console.log(pair);

/*

Object.seal(person);

delete person.isSingle; // this will not delete because the object is in seal mode
console.log(person);

person.income=1500; // but data can be updated.
console.log(person);

*/

Object.freeze(person);

person.gf="Elina"; //it will be not add because the object is in freeze mood

delete person.isSingle; // this will not delete because the object is in freze mode
console.log(person);

person.income=1500; // but data cannot be update because the object is in seal mode.
console.log(person);