import React from "react";
import {Link} from 'react-router-dom';
function Logout()
{
    return(
        <div>
        <div className="navbar">
            <div className="names">
                <div>Lets Do</div>
                <div className="names">
<div><Link to="/Startquiz" className="Home">Home</Link></div>
<div><Link to="/Profile" className="Home">Profile</Link></div>
{/* <div> <Link to="/Loginpage" className="Home">Logout</Link></div> */}
                </div></div></div>
        <div className="Startpage">
            
             <div  className="logout"> <h1>Logout successfully</h1></div>

        </div>
        </div>
    )
}
export default Logout;