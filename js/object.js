//1. creating object using object literals:
const student = {};
student.name="Emon";
student.cgpa=3.82;
student.location="Dhaka";
student.skills=()=>{
    console.log("Pro Codder");
    console.log("Good knowledge on: HTML,CSS,JS,Java,C,C++,Python");
}
console.log(student);

const car={    
    name:"Audi",
    model:"2023",
    price:5122222
}
console.log(car);

// 2: object constructor
const player = new Object({
    salary:25000,
    role:"All Rounder",
});
player.name="sakib";
player.age=36;
console.log(player);

// 3: object create method
const toper = Object.create(student);
console.log(toper);
console.log(toper.name);

// 4: using class:
class businessman{
    name="abul";
    location="Dhaka";
    constructor(age){
        this.age=age;
    }
}

const person1 = new businessman(51);
console.log(person1);





