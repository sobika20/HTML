//an array of object is a collection where each element is an object with properties.this is used to group related data together in a structured way
let details={
    name:"js",
    totalmarks:100
    subject:{
        dbms:100,
        java:100,
    }
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        console.log(total);
        console.log(details.sum());
    }
}
console.log(details.name);
console.log(details["totalmarks"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);

//object destructuring is a syntax in javascript that allows you to 
// extract values from object and assign them to 
// variables in a clean and readable way.
let person={
    job:"softwareTester",
    salary:25000
}
const{job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);

let arr=new Array(1,2,"three");
console.log(arr[2]);

let arr2=["js",true,false];
//array destructuring
const[name,b1,b2]=arr2;
console.log(name)
//filter-return a new array containing a 
// only the elements that match a condition.
let students=[
    {name:"john",grade:"A"}
    {name:"joe",grade:"B"}
    {name:"suvitha",grade:"A"}
]
let gradestudents=students.filter(student=>students.grade=="A")
console.log(gradestudents);

let data=[1,2,3,4,5];
let result=data.slice(1,2);
console.log(result);

//slice()
//=>syntax-array.slice(start,deletecount,item1,item2,...)
//ex:
//let names=["asha","bala","charan"];
//name.slice(1,1,"david");
//console.log(names);