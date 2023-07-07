// if users enter a name then first letter should start with UpperCase

// promp method is used to take input from user
let a =prompt('Enter Your Name')

// let b =a.charAt(0).toLocaleUpperCase()+a.slice(1)
// console.log(b);

// or

let t =a.charAt(0).toLocaleUpperCase().concat(a.slice(1))
console.log(t);