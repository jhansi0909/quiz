import React, { useState } from "react";
function Age(){
    const [age,setAge]=useState(0)
    const [agex,setAgex]=useState(0)

function handleChange(event){

    setAge(event.target.value)
    if(event.target.value<18 )
    {
        console.log("not eligible for vote")
        setAge("not eligible")
        setAgex(event.target.value)
    }
    else if(event.target.value>=18)
    {
        console.log("eligible for vote")
        setAge("eligible")
        setAgex(event.target.value)

    }
    console.log(agex)
    console.log(age)
}
return(
       
       <div>

<input   onChange={handleChange} ></input>
<div> your age is {agex}</div>
<div> you are {age}</div>
       </div>
);
}
export default Age;