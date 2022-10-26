import React,{useState} from "react";
import {useLocation} from 'react-router-dom'

function Specific()
{     
     const location=useLocation();
   var [data,setData]=useState(location.state);
 console.log(location)
    


    return(
        <div>
            {/* <h1>heloooo</h1> */}
            <h4>Your details are:</h4>
        <div>Name is:{location.state.name}</div>
        <div>Email is:{location.state.email}</div>
        <div>Message is:{location.state.message}</div>
        {/* <h1>heloooo</h1> */}
        </div>
    
    )
}
export default Specific;
