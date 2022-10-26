import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
// import {useNavigate} from "react-router-dom"

function Newfile()
{
    const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")
const [button,setButton]=useState(false)
const [data,setData]=useState([])
const navigate=useNavigate();
function handleChange(name)
{
    setName(name.target.value)
    setButton(false)
}
function handleEmail(email)
{
    setEmail(email.target.value)
    setButton(false)
}
function handleMessage(message)
{
    setMessage(message.target.value)
    setButton(false)
}
function Call()
{
    setButton(true)
    if(name!="" && email!="" && message!="")
    {
        setData([...data,
            {
                name:name,
                email:email,
                message:message
            }])
        console.log("data is",data) 
    }
    // navigate("/Card",{state:data})
// console.log(state)

}
function Calling()
{
   navigate("/Card",{state:data})
}

    return(
        <div className="Main">
    <div>
        <div className="first"><h1>CONTACT</h1>
        Fan? Drop a note!
        </div>
        <div className="contact">
          <div className="left">
           <div> Chicago,US</div> 
          <div>Phone: +00 151515</div>
        <div>  Email: mail@mail.com</div>
          </div>
       <div className="rightside">
       <div >
        <div className="right" >
       <div > <input className="input" placeholder="Name" onChange={handleChange}></input>
        <div className="red"> {(name=="")?((button==true)?"Please fill the requied field":" "):""}</div>
        </div>
        <div><input className="input" placeholder="Email" onChange={handleEmail}></input>
       <div className="red"> {(email=="")?((button==true)?"Please fill the requied field":" "):""}</div>
       </div>
       </div></div>
       <div><input className="input1" placeholder="Message" onChange={handleMessage}></input>
       <div className="red"> {(message=="")?((button==true)?"Please fill the requied field":" "):""}</div>
       </div>
       <div className="button">
       <button className="send" onClick={Call}>SEND</button>
       <button className="add" onClick={Calling}>Add</button>
       </div>
       </div>
</div>
</div>
 </div>
    )
}
export default Newfile;