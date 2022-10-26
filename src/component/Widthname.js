import React from "react";
function Widthname()
{
    function Call(){
     var c=document.getElementById("a")
     c.style.width="300px"
     var num=parseInt(c.style.width)+50
     
     var txt=num.toString()
     c.style.width=txt+"px"
     console.log(c.style.width)
    

    }
    return(
        <div>
    <div id="a" style={{backgroundColor:"blue",width:"100px", height:"60px", display:"block"}  }></div>
    <button onClick={Call}>click me</button>
</div>

    )
}
export default Widthname;