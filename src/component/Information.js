import React, { useState } from 'react'
function Information()
{
    const [firstname,setFirstname]=useState("")
    const [surname,setSurname]=useState("")
    const [college,setCollege]=useState("")
    const [rollno,setRollno]=useState("")
    const [cgpa,setCgpa]=useState("")
    const [email,setEmail]=useState("")
    const [branch,setBranch]=useState("")

    const [submit,setSubmit]=useState(false)

 
    function handleChange(event)
    {
        setFirstname(event.target.value)
        console.log(firstname)
        setSubmit(false)
    }
    
    function handleChange1(goal){
        setSurname(goal.target.value)
        console.log(surname)
        setSubmit(false)

         }
       function handleChange2(set){
         setCollege(set.target.value)
         console.log(college)
        setSubmit(false)

       }
       function handleChange3(roll){
        setRollno(roll.target.value)
        setSubmit(false)

       }
       function handleChange4(cgpa){
        setCgpa(cgpa.target.value)
        setSubmit(false)

       }
       function handleChange5(email){
        setEmail(email.target.value)
        setSubmit(false)

       }
       function handleChange6(branch){
        setBranch(branch.target.value)
        setSubmit(false)

       }

function Call()
{
    setSubmit(true)
}
return(
    <div class="a">
        <div class="c"> <h1> WELCOME to Job Portal</h1></div><br></br>
  <div>  Firstname<br></br>
     <input class="b" onChange={handleChange} placeholder={"Firstname"}></input>
      {(firstname=="")?((submit==true)?"Please fill the requied field":" "):<div>
         {
          firstname.length<6?<div>{(submit==true)?<div>fist name must be greater than 6</div>:""}</div>:<div>it is valid</div>
         }
        </div>}</div><br></br>

   <div>Surname<br></br>
    <input class="b" onChange={handleChange1} placeholder={"Surname"}></input>
    <div> {(surname=="")?((submit==true)?"Please fill the requied field":" "):""}</div>
    </div><br></br>
   <div> College name<br></br>
     <input class="b" onChange={handleChange2} placeholder={"College name"}></input>
     <div> {(college=="")?((submit==true)?"Please fill the requied field":" "):""}</div>
     </div><br></br>
   <div>Roll no<br></br> 
     <input class="b"onChange={handleChange3} placeholder={"Roll no"}></input>
     <div> {(rollno=="")?((submit==true)?"Please fill the requied field":" "):""}</div>
     </div><br></br>
     <div>Enter your CGPA<br></br> 
     <input class="b"onChange={handleChange4} placeholder={"CGPA"}></input>
     <div> {(cgpa=="")?((submit==true)?"Please fill the requied field":" "):""}</div>
     </div><br></br>
     <div>Enter your Email<br></br> 
     <input class="b"onChange={handleChange5} placeholder={"Email"}></input>
     <div> {(email=="")?((submit==true)?"Please fill the requied field":" "):""}</div>
     </div><br></br>
     <div>Enter your Branch<br></br> 
     <input class="b"onChange={handleChange6} placeholder={"Branch"}></input>
     <div> {(branch=="")?((submit==true)?"Please fill the requied field":" "):""}</div>
     </div><br></br>

     {/* <div class="resume">Upload your Resume<br></br> 
     <input class="e"onChange={handleChange} placeholder={"select from you drop down box"}></input></div><br></br> */}

   <button class="d" onClick={Call}>Submit</button>
   <div class="button">{(submit==true)?"Your submitted successfully":" "}</div>
   <div> {(firstname=="")?((submit==true)?"Please fill the requied field":" "):""}</div>

              <div>{submit==true?<div>your fist name is{firstname}</div>:""}</div>
              <div> {(submit==true)?<div>"Your First name is :  "{firstname}</div>:<div></div>}</div> 
              <div>{(submit==true)?"Your Surname        :  ":""}{surname}</div>
              <div>{(submit==true)?"Your College name   :  ":""}{college}</div>  
              <div>{(submit==true)?"Your Roll no        :  ":""}{rollno}</div> 
              <div>{(submit==true)?"Your  CGPA          :  ":""}{cgpa}</div> 
              <div>{(submit==true)?"Your  Email         :  ":""}{email}</div>  
              <div>{(submit==true)?"Your  Branch        :  ":""}{branch}</div> 
</div>
);
}
   export default Information;