function clicked(){
    let a = document.getElementById('p1')
    a.remove()
}

let a = document.getElementById('k2')
a.addEventListener('click',()=>{
    let body = document.body
    let aside = document.createElement('aside')
    aside.innerHTML+=` <form action="#" method="get" onsubmit="fetch()" id="t1">
    <label for="comment">Comment</label>
    <textarea name="comment" id="comment"></textarea>
    <input type="submit"  id="submit">
    </form>`
    body.appendChild(aside)
})

function fetch(){
    var comment = document.getElementById("comment").value
    document.writeln("Comment : "+comment)
}
