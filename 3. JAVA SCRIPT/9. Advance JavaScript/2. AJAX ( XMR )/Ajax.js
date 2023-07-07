let request = new XMLHttpRequest()
request.open('GET','https://api.github.com/users')
request.send()
request.onload =()=>{
    // convert into normal form (this is already in a stringyfy form so that)
    console.log(JSON.parse(request.response));
}