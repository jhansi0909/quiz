import React from "react";
function Width()
{
    function Call(){
     var c=document.getElementById("a")
     var num=parseInt(c.style.width)
     var txt=num+"px"

    }
    return(
        <div>
    <div id="a" style={{backgroundColor:"blue",width:"100px", height:"60px", display:"block"}  }></div>
    <button onClick={Call}>click me</button>
</div>

    )
}
export default Width;