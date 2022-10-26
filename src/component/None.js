import React, { useState } from "react";
function None(){
const [age,setAge]=useState()
const [agex,setAgex]=useState()
function handleChange(event)
{
     setAge(event.target.value)
    // setAgex(event.target.value) 
    setAgex(event.target.value)
    // setAgex(age)
    console.log(age)
    console.log(event.target.value)
}
// function Call()
// {
//     return <h3>Please enter your age</h3>
// }
// function Calling(){
//         return (
//             (age>18)?"your are eligible":"your are not eligible"
//         )
// }
return(

    <div>
        <input onChange={handleChange}></input>
        <div>{(agex=="")?<h4>Please enter your age </h4>: ((age==null)?<h4>Please enter your age</h4>:   (age>18)?"your are eligible":"your are not eligible")}</div>
{agex}
    </div>
);

}
export default None;