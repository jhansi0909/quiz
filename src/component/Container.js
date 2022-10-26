import React from "react";
// var c=document.getElementById("a")
function Container(){
    function Call(){
        var c=document.getElementById("a")
        if(c.style.display=="block")
        {
            c.style.display="none"
            console.log("none")
        }
       
        else if(c.style.display!="block")
        {
            c.style.display="block"
            console.log("block")
        } 
       
    }
  
return(
    <div>
    <div id="a" style={{backgroundColor:"blue",width:"100px", height:"60px", display:"block"}  }></div>
    <button onClick={Call}>click me</button>
</div>
);
}
export default Container;
