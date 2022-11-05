import React from "react";
import {Navigate, useLocation, useNavigate,Link} from 'react-router-dom';
// import { Link } from 'react-router';
function Startquiz()
{
    const navigate=useNavigate();
    function Start(obj)
    {
        navigate("/Quiz",{state:obj})
    }
    return(
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

        
            <h1  className="Start" > 
            Start the Quiz
            </h1>

            <div className="start1">
      <button onClick={Start} className="Startbutton"> Start </button>
      </div>
      </div>
      </div>
    );
}
export default Startquiz;