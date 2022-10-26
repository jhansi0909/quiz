import React, {useState} from "react";  
// function Onchange(){
//     const [firstName, setFirstName] = useState('');

//       console.log(firstName)
//     return(
//         <div>
//         <input   name="firstName"   onChange={ e => setFirstName(e.target.value)} ></input>
// {firstName}
//        </div>
//     );
// }
function Onchange()
{  
    // const[firstName,setFirstName]=useState('')
    function handleChange(event){
    // setFirstName(event.firstName)
        console.log(event.target.value);
    }
    return(
    <div>
           <input placeholder="Firstname"  name="firstName" onChange={handleChange} ></input>
              {/* {firstName} */}
</div>
    );
}
// function Onchange(){
//         const[firstName,setFirstName] = useState('')
//         const Call = () =>{
//             setFirstName(firstName);
//            console.log(firstName)
//        }
    

//     return(
//     <div>
//  <input name="firstName" onChange={Call}></input>
//  {firstName}
//     </div>
       
//     )
// }

export default Onchange;