const student={
    name: "Emon",
    age:22,
    salary:15000,
    subject: ["Math","Physics","Chemistry"],
    exam: function(){
        console.log("Just Go For the exam and get A+");
    },
    waiver: function(percent=0){
        this.exam();
        return `This semester ${this.name} get ${this.percentage = percent}% waiver`;
    }

}

student.exam();
const waiver = student.waiver(5);
console.log(waiver);

