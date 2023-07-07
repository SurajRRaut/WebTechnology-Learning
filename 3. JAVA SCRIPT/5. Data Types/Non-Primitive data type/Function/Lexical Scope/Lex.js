console.log("Start");
let a = 10;
console.log(a);
function x(){
    var b = 30;
    console.log(b);
    var c = 40;
    function y (){
        console.log();
        var d ="Hello";
        console.log(c);
    }
    return y
} x()()
console.log("End");