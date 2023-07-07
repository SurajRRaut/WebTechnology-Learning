let x = async function(){
    let data = await fetch('https://api.github.com/users')
    console.log(data);
    // convert stringify into JSON >>
    let finaldata = await data.json()
    console.log(finaldata);
    finaldata.map((x)=>{
        let body = document.body
        let table = document.createElement('table')
        table.id ='tab'
        table.style.width="50%"
        table.style.border=1
        table.innerHTML+= `
        <tr>
        <td>${x.id}</td>
        <td>${x.login}</td>
        <td><img src = ${x.avatar_url} height='100px' width='100px'></td>
        </tr>
        `
        body.appendChild(table)
    })
}
x()