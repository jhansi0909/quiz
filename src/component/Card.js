import React, { useEffect, useState } from "react";
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
function Card(){
    const location=useLocation();
   console.log(location)
   console.log(typeof(location))
   const navigate=useNavigate();
   
    var [data,setData]=useState(location.state);
    // useEffect(()=>{
    //     console.log("helllo")
    // setData([...data,location.state])
    // console.log("daata is",data)
    // },[]);
    console.log(typeof(location))
    console.log(data)
    console.log(typeof(data))
    // var i=0;
    function Call(obj){
        console.log("You clicked on this data",obj)
        navigate("/Specific",{state:obj})
}
return(
        <div>
    <div>
        <h4>Your details are:</h4>
        <div>Name is:{location.state.Name}</div>
        <div>Email is:{location.state.Email}</div>
        <div>Message is:{location.state.Message}</div>

    </div>

        
            <div className="mainone">
            {
         data.map((data)=>{
            return(
            <div className="cards">
                <div>Name is:{data.name}</div>
                <div>Email is:{data.email}</div>
                <div>Message is:{data.message}</div>
                <button onClick={()=>{
                    Call(data)
                }}>view</button>
             </div>
            ) }
         )
            }
        </div>
        </div>
    );
}
export default Card;

