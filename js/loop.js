const person={
    name:"Emon",
    profession:"student",
    income:12000,
    isSingle:true,
}


// ------way-1:(we will not use it)---------
// step-1:--get all keys from the object
const keys = Object.keys(person);
// step-2:---for of loop:
for (const key of keys) {
    //console.log(key,person[key]);
}


// way-2:(use for in loop): we will use it most of the time
for (const key in person) {
   // console.log(key,person[key]);
}

// way-3(advance):
for (const [key,value] of Object.entries(person)) {
    console.log(key , value);
}