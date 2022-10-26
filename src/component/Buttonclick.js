import React, { useState } from "react";
function Buttonclick(){
    const [button,setButton]=useState(false)
     function Call()
     {
        //   setButton
        setButton("true")
          console.log(button)
        //   console.log("clicked the button")
     }
  return (
    <div>
    <button onClick={Call}>click me</button>
    <div>{ button=="true"?"click the button":" "}</div>
    </div>
    
  )


}
export default Buttonclick;
