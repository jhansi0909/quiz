import React, { useState } from "react";
function Submit()
{ 
    const [input,setInput]=useState("")
    const [submit,setSubmit]=useState(false)
    const [string,setString]=useState("")
    const [length,setLenght]=useState(0)
    const [str,setStr]=useState(0)
    const [len,setLen]=useState(0)

      function handleChange(event)
      {
              setInput(event.target.value)
            setSubmit(false)
              console.log(input)
              setString(event.target.value)
              setLenght(string.length)
             console.log(string)
             console.log(typeof(input))
             setStr(event.target.value)
             setLen(str.length)
      }
      function Call()
      {
        setSubmit(true)
        console.log(submit)
      }
      

      return(

        <div>
        <input onChange={handleChange}></input>
        <input onChange={handleChange}></input>
        <button onClick={Call}>submit</button>
        <div>{(length<6)?((submit==true)?"it must be greather than 6":" ")  :""}</div>
        {/* <div>{(length<6)?(((submit==true)?"it must be greather than 6":" ")  :""):(len<6)?((submit==true)?"Password must be greather than 6":" ")  :""}</div> */}


        <div>{(len<6)?((submit==true)?"Password also must be greather than 6":" ")  :""}</div>
        <div> {(input=="")?((submit==true)?"user name is a required fill":" "):""}</div>
        {input}
        </div>
      );



}
export default Submit;


