let a = [1,2,3,4,5]
console.log(a);

let b = a.push(6,7,8,9,10)
console.log(a);

let c = a.pop()
console.log(a);

let d = a.shift()
console.log(a);

let e = a.unshift(1)
console.log(a);

let f = a.filter((e)=>e>3)
console.log(f);

let g = a.map((x)=>x*3)
console.log(g);

let h = a.reduce((f,l)=>{
    return f+l
})
console.log(h);



let aa = [100,200,300]
console.log("In loop");
for (const x in aa) {
    console.log(x);
}
console.log("Out Loop");
for (const x of aa) {
    console.log(x);
}
let xx = 'hello'
console.log("In loop");
for (const x in xx) {
    console.log(x);
}
console.log("Out Loop");
for (const x of xx) {
    console.log(x);
}
let zz = {
    name : "suraj",
    id : 12345
}
console.log("In loop");
for (const x in zz) {
    console.log(x);
    console.log(zz[x]);
}
console.log("Out Loop");
for (let x of zz) {
    // Not Executed
    console.log(x);
}



aa.forEach((val,ind)=>{
    console.log(`${val}==${ind}`);
})

// let x = prompt('enter your name')
let y = x.split('').reverse().join('')

if (x==y) {
    console.log("Its An Palindrome");
}
else{
    console.log("Its Not An Palindrome");
}
console.log(y);


