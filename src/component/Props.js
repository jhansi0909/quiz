import React, { PureComponent } from 'react';

function Props(props){
    console.log(props)
    return(
        <div>
        <h1>heloooo{props.name} {props.age}</h1>
        {props.children}
        </div>
    )
}
export default Props;