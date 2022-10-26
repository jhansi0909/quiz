import React from 'react';
// function About()
// {
    // const mystyle = {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arialy"
    //   };
    // return(
    //     <h2 style={mystyle}> Hello About page</h2>
    //     // <h1>Home</h1>
    //     // <h2>Contact us</h2>
    // );
    function About() {
        const shoot = () => {
          alert("Great Shot!");
        }
      
        return (
          <button onClick={shoot}>Take the shot!</button>
        );
      }
// }
export default About;