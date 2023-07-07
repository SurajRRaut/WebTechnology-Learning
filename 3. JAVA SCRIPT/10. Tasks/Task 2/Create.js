// create HTML part by using the JAVA SCRIPT

let body = document.body
let section = document.createElement('section')
section.id="p2"
for(let a = 0; a<100; a++) {
    section.innerHTML+=`<div id ="p1">
    <p>NAME : ROCKY</p>
    <p>DESI CEO</p>
    <img src="https://pbs.twimg.com/profile_images/1657277957403189249/Ywa425gA_400x400.jpg" height=""100px width="100px" alt="">
    <p>HAPPY BIRTHDAY</p>
</div>`
}
body.appendChild(section)
