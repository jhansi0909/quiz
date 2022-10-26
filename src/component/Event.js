import React, { useState } from "react";
function Event(){
    const [display,setDisplay]=useState("block")
    
    const Call=()=>{
        //  setDisplay("none")
        //  setDisplay("block")
        //  console.log("heloo")
         if(display=="none"){
            setDisplay("block")
            console.log("block")
         }
         else if(display=="block")
         {
            setDisplay("none")
            console.log("none")
         }
        //  console.log(setDisplay("none"))
            
    }
    // function handleChange(event){
       
    //     setDisplay("none");
    //     console.log("heloo")
    // }
    
    return(
        
        <div>
    <div  style={{backgroundColor:"blue",width:"100px", height:"60px",display:display}}></div>
    <button onClick={Call}>click me</button>
    <div>{display}</div>
</div>
    );

}
export default Event;