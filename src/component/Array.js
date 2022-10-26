import React, { useState } from "react";
function Array()
{
    const [arr,setArr]=useState(0)
    
  const array=[1,2,3,4]
//   setArr(arr+1)
// var i=0;
    function Call()
    {
        setArr(arr+1)
        // array[0]
        // console.log(x)
        console.log(array)
        // for(var i=0;i<4;i++){
        //     arr=array[i]+1
        // }
        // array[i+1]
    }
   


return(
    <div>
    
            {array[arr]}
        
   
  
<button onClick={Call}>click</button>
</div>

);
}
export default Array;