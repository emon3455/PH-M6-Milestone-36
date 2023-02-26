const student={
    name: "Emon",
    age:22,
    salary:15000,
    subject: ["Math","Physics","Chemistry"],

    exam: function(){
        return `${this.name} Just Go For the exam and get A+`;
    },

    bonus: function(percent=0){
        this.exam();
        return `This month ${this.name} get ${this.percentage = percent}% Bonus`;
    },

    khoroch: function(amount,others){
        return `This month ${this.name} have ${this.salary - amount-others} TK`;
    }

}

const emon={
    name:"Ariyan Hossain Emon",
    salary:25000,
}

const res1 = student.exam.call(emon); // using no parameter function
// console.log(res1);

const res2 = student.khoroch.call(emon, 100,200); // using parameter function
// console.log(res2);

const res3 = student.khoroch.apply(emon,[300,100]); // using parameter function
// console.log(res3);

const res4 = student.khoroch.bind(emon); // using bind
const ans =res4(100,200);
console.log(ans);









