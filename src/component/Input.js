import React, { useState } from "react";
function Input()
{ 
    const [color,setColor]=useState("blue")
    function handleChange(event)
    {
              setColor(event.target.value)
              console.log("helo")
    }
    
        return(
            <div>
                    <div  style={{backgroundColor:color,width:"100px", height:"60px", border:"2px solid balck",display:"block"}  }></div>
                    {/* <button onClick={Call}>click me</button> */}
                    
                   <input placeholder="Firstname"  name="firstName" onChange={handleChange} ></input>
                    {color}
        </div>
            );   
        
        



}
export default Input;                           