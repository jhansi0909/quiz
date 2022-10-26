import React, { useState } from "react";
function Widthone(){
    const [width,setWidth]=useState(100)
     function Call(){
        console.log(width)
        setWidth(width+20)
        // console.log(width)
        
        
     }

     return(
        <div>
    <div id="a" style={{backgroundColor:"blue",  height:60,width:width  }  }></div>
    <button onClick={Call}>click me</button>
</div>

     );
     
}
export default Widthone;