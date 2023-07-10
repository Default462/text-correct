import React from 'react';
import { useState } from 'react';


const Alert= (props) => {
    // const [text,setText] = useState();
    // setTimeout(()=>{
        
    // },10000);
    return (

        props.text && <div className="alert alert-success my-2" role="alert" style={{ position: 'fixed','width': '100%'}}> 
            {props.text}
        </div>
        );
}

export default Alert;


