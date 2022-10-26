import React, { useState } from "react";
function Stateupdate(){
 const [array,setArray]=useState([1,2,3,4,5,6])

function Call()
{
//    var x=array.map((data,index)=>{
    //     if(data==5){
    //         return 50;
    //     }else{
    //         return data;
    //     }
    // })
    // setArray(x)
    // console.log("x is",x)
    setArray(array.map((e)=>{
       if(e==5)return 50
       else return e
    })
    )
}
return (
    

    <div>{
        array.map(( e )=>
     {
        return(
            <div>{ e }</div>
        )
     }
    )
    }
    <button onClick={Call}>click me</button>
    </div>
);

}
export default Stateupdate;