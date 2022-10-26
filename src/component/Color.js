import React, { useState } from "react";
function Color()
{ 
    const [color,setColor]=useState("blue")
    const [click,setClick]=useState("red")
    function handleChange(event)
    {
              setColor(event.target.value)
              console.log("helo")
    }
    function Call(){

            setClick(color)
    }
        return(
            <div>
                    <div  style={{backgroundColor:click,width:"100px", height:"60px", border:"2px solid balck",display:"block"}  }></div>
                    <button onClick={Call} onChange={handleChange}>click me</button>
                    
                   <input placeholder="Firstname"  name="firstName" onChange={handleChange} ></input>
                    {click}     
        </div>
            );   
        
        



}
export default Color;                           