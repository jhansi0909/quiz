import React, { useState } from "react";
function Change(){
    const[firstName,setFirstName]=useState('')
    function handleChange(event){
       
    setFirstName(event.target.value);
    console.log(event.target.value)
    console.log(firstName)

}
return(
    <div>
    <input name="firstName" onChange={handleChange}></input>
    {firstName}
    </div>
);  
}
export default Change;