import React,{useState} from "react"; 
import {useLocation,Link} from 'react-router-dom'
function Finalquizpage(){

    const location=useLocation();
    console.log("location is",location.state)
   var [data,setData]=useState();
   
    
     return (
        <div>
        <div className="navbar">
            <div className="names">
                <div className="letsdo">Let's Do</div>
                <div className="names">
                <div>  <Link to="/Startquiz" className="Home">Home</Link></div>
        <div><Link to="/Profile" className="Home">Profile</Link> </div>
        <div><Link to="/Loginpage" className="Home">Logout</Link></div>
                </div></div></div>
        <div className="Startpage">
            
            <h2 className="completed">Your Quiz is successfully completed</h2>
            <h2 className="completed">Congratulations</h2>
        <div className="finalscore"><h2>Your score is : {location.state}</h2></div>
            </div>
        </div>
     );
}
export default Finalquizpage;