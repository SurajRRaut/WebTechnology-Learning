let a = document.getElementById('btn1')
a.addEventListener('click',()=>{
    document.body.style.backgroundColor="yellow"
})

let b = document.getElementById('ip1')
b.addEventListener('keyup',()=>{
    document.body.style.backgroundColor="blue"
})  

b.addEventListener('keydown',()=>{
    document.body.style.backgroundColor="orange"
})  

