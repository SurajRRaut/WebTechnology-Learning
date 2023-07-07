function Grandparent(){
    console.log("GrandParent");
    function Parent(){
        console.log("Parent");
        function child(){
            console.log("Child");
        }
        child()
    }
    Parent()
}
Grandparent()