let emp ={
    ename : "suraj",
    eid : '123'
}
console.log(emp);
// convert normal to JSON form >>
console.log(JSON.stringify(emp));
// convert JSON to normal form >>
console.log(JSON.parse(JSON.stringify(emp)));