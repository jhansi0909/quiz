import React, { useState } from "react";
function Button(){
    const [display,setDisplay]=useState("block")
    function Call(){
        setDisplay("none")
    }
    function Calling()
    {
        setDisplay("block")
    }
    return(

        <div>
    <div  style={{backgroundColor:"blue",width:"100px", height:"60px",display:display}}></div>
    <button onClick={Call}>click me</button>
   < button onClick={Calling}>click me</button>

    <div>{display}</div>
</div>
    )
}
export default Button;
