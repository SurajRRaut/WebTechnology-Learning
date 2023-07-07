sessionStorage.setItem('name','SRK')
sessionStorage.setItem('age',57)

// let name = sessionStorage.getItem('name')
// let age = sessionStorage.getItem('age')
// document.write(`my name is ${name} and my age is ${age}`)

sessionStorage.clear()

sessionStorage.removeItem('name')
let name = sessionStorage.getItem('name')
let age = sessionStorage.getItem('age')
document.write(`my name is ${name} and my age is ${age}`)

// Session storage - 5mb Space is there and its temperory store