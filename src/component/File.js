import React, { useState } from "react";
function File(){
    const [count,setCount]=useState(0);  
const Call = () =>{
     setCount(count+1);
    console.log(count)
}
const Decrement = () =>
{
    setCount(count-1);
    console.log(count)
}

return(

    <div >
 
    <button onClick={Call} className="a">click me </button>

    <button onClick={Decrement}>click me</button>
    {count}
    
    </div>
);


}
export default File;