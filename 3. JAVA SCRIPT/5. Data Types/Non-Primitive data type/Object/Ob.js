// 1. 
// let emp = {
//     ename : 'Vikas',
//     eid : 123,
//     eplace : "Mysore" 
// }
// emp.id=123 // add another value in object
// console.log(emp);
// console.log(emp.eid); //object destructure
// console.table(emp); // this is for in table format
// console.log(typeof emp);

// 2.
// NESTED OBJECT=>>

// let stu = {
//     sName:'Aditya',
//     sId:222,
//     sPlace:'Pune',
//     sCity:{

//         sPin:506601,
//         sSchool:'Wagh School'
//     }
// }
// console.log(stu);
// stu.sCity,sLandmark='Railway Gate'
// console.log(stu);

// 3.
// () : callback function (Like Ananymous Function)
// this keyword : it is a clone of an window

// 4.
// store values an key in the Object

function Emp (name,id){
    this.name = name
    this.id = id;
}
let e1 = new Emp('Suraj',12345)
let e2 = new Emp('Anand',54321)

console.log(e1);
console.log(e2);