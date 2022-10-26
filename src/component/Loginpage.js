import React, { useState } from "react";
import {Navigate,useLocation,useNavigate} from 'react-router-dom'
function Loginpage(){
    const navigate=useNavigate();
    const [login,setLogin]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState([])
    function handleChange(event)
    {
        setEmail(event.target.value)
        setLogin(false)

    }
    function handlePassword(password)
    {
        setPassword(password.target.value)
        setLogin(false)

    }
    function Call(){
    navigate("/Startquiz")
    }

    return(
        <div className="Startpage">
            <div><h1 className="title">Lets Do</h1></div>
        <div className="input2">
        <div ><input className="email" placeholder="Email" onChange={handleChange}></input></div>
        <div className="red"> {(email=="")?((login==true)?"Please fill the requied field":" "):""}</div>
        <div><input className="password" placeholder="Password" onChange={handlePassword}></input>
        <div className="red"> {(password=="")?((login==true)?"Please fill the requied field":" "):""}</div>
        </div>
        </div>
        <button className="login" onClick={Call}>Login</button>
        </div>

        
    )
}
export default Loginpage;