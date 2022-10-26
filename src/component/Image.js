import React from "react";
import Shop from '../shop.jpg' ;

 function Image()
 {
    // const x=[1,2,3,4,5,6];

const x=[
    {
        name:"Avasa tops",
        price:300,
        image:Shop

    },
    {
        name:"kurtas",
        price:300,
        image:Shop

    },
    {
        name:"kurtas",
        price:300,
        image:Shop

    },
    {
        name:"kurtas",
        price:300,
        image:Shop

    },
    {
        name:"kurtas",
        price:300,
        image:Shop

    },
    {
        name:"kurtas",
        price:300,
        image:Shop

    }

]
    return(
        <div className="Main">
        <div className="second" >
            {
                x.map((data)=>{
                    return(
                        <div>
                        <div className="first" >
                            <img className="image" src={data.image}></img>
                            <div>Name is:{data.name}</div>
                            <div>Price is:{data.price}</div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
 }
 export default Image;
