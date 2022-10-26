import React from "react";
// var c=document.getElementById("a")
function Display()
{
  
    function Call()
    { 
        var c=document.getElementById("a")
            c.style.display="none"
            console.log("helo")
    }
    function Calling(){
        var c=document.getElementById("a")  
     c.style.display="block"
     c.style.color="red"
        console.log("hgfd")
    }

    return(
        <div>
    <div id="a" style={{backgroundColor:"blue",width:"100px", height:"60px", display:"block"}  }></div>
    <button onClick={Call}>click me</button>
    <button onClick={Calling}>click me</button>
</div>
    )
}
export default Display;