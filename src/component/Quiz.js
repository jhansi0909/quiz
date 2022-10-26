import React, { useState } from "react";
import {Navigate,useLocation,useNavigate,Link} from 'react-router-dom';
// import { Link } from 'react-router';

function Quiz()
{
  const navigate=useNavigate();
  const location=useLocation();
    const [previous,setPrevious]=useState(false)
    const [next,setNext]=useState('')
    const [data,setData]=useState([])
    const [submit,setSubmit]=useState(false)
    const [array,setArr]=useState(0)
    const [result,setResult]=useState(0)
    const [answer,setAnswer]=useState([0,0,0,0]) 
    const [actualanswer,setActualanswer]=useState([1,2,2,3])
    const [option,setOption]=useState("") 
    const [checked,setChecked]=useState([false,false,false,false])
  
      const arr=[
        {
            Question:"1.What country has the highest life expectancy?",
         options:{
              A:"Hong Kong",
                B:"Chicago",
                C:"Paris",
                D:"China"
         },
        //  Answer:"A"
         },
        {
            Question:"2.What year was the United Nations established?",
            options:{
                A:"1943",
                B:"1945",
                C:"1965",
                D:"1960"
            },
            Answer:"B"
         },
        {
          Question:"3.How many minutes are in a full week?",
          options:{
              A:"10,067",
              B:"10,080",
              C:"10,089",
              D:"10,094"
          },
          Answer:"B"
        },
      {
        Question:"4.How many bones do we have in an ear?",
        options:{
            A:"5",
            B:"6",
            C:"3",
            D:"2"
        },
        Answer:"C"
        }
  ]
    function Call(){
      if(array==arr.length+1){
        setArr(0)
        console.log("helooo")
       }else{
        setArr(array-1)
        console.log("ghffgvbhn")
       }
      // setArr(array-1)
        console.log(arr)
       console.log("helooo")
     }
      
    function Calling(){
      if(array==arr.length-1){
        setArr(3)
       }else{
        setArr(array+1)
       }
    }
    function handleChange(event)
    {
     console.log(event.target.value) 
     console.log(array+1) 
     var x=answer.map((data,index)=>{
      if(array==index )
      {
        return event.target.value
      }
      else{
        return data
      }
     }
     )
     setAnswer(x)
     console.log("x is",x);
     }
      function sub(){
        var s=0;
      setSubmit(true)
      // setResult(result)
      console.log("helooo")
      for( var i=0;i<4;i++)
      {
        // console.log(answer[i],actualanswer[i])
          if(answer[i]==actualanswer[i])
          {
            s++;
             setResult(result+1)
          }
          console.log(actualanswer[i])
          console.log(typeof(answer))
        }
      setResult(s)
      console.log("score is",s)
      navigate("/Finalquizpage",{state:s})
            console.log(location)
      
        // alert("Your score is:"+s)
    }
    
    console.log(answer[array])
        console.log(actualanswer[array])
        console.log(answer)
        console.log(actualanswer)
   return (
    <div>
    <div className="navbar">
            <div className="names">
                <div>Lets Do</div>
                <div className="names">
                <div> <Link to="/Home" className="Home">Home</Link></div>
        <div><Link to="/Profile" className="Home">Profile</Link> </div>
        <div><Link to="/Logout" className="Home">Logout</Link></div>
                </div></div></div>

      <div className="Main1">
        
      <div className="heading">  <h1>Welcome to the Quiz </h1></div>

        <div className="question">{ arr[array].Question}</div>
        <div onChange={handleChange} className="options">
       <div > <input type="radio" value="1" name={array} checked={answer[array]==1} />{arr[array].options.A}
       <input type="radio" value="2" name={array} checked={answer[array]==2}/>{arr[array].options.B}
       <input type="radio" value="3" name={array}  checked={answer[array]==3} />{arr[array].options.C}
       <input type="radio" value="4" name={array} checked={answer[array]==4}/>{arr[array].options.D}
       </div>
       </div>
       <div className="button1">
        <button onClick={Call} className="previous">Previous</button>
        <button  onClick={Calling} className="previous">Next</button>
       </div>
       
      <div className="para"> {(next=="")?"Note:Your exam is completed please click the submit button to close the exam and display your score":""}</div>
      <div className="submitbutton" >
        <button  onClick={sub} className="submit">Submit</button>
      </div>
      <div>
    </div>

      </div>
      </div>
      
    )
}
export default Quiz;

