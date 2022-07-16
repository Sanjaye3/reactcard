import React, { useState } from "react";
import "C:\\Users\\sanja\\OneDrive\\Desktop\\card\\my-app\\src\\Components\\Card.css";
import Button from '@mui/material/Button';


function Card({h,e,a,b}) {

    const data_render1 = a.map((element) => <li><i class="fas fa-check"></i>&nbsp;&nbsp;{element}</li>);

const data_render2 =  b.map((d) => <li className="muted-text"><i class="fas fa-times"></i>&nbsp;&nbsp;{d}</li>);
    
    return ( 
        <div className="Card">
            <div className="Upper">
                <p className="first">{h}</p>
                <p><span style = {{fontSize:"50px"}}>${e}</span>/month</p>

            </div>
            <hr />
            <div className="middle">
            
                {data_render1}
                {data_render2}
                
            </div>


            <div className="lower">
            <Button variant="contained" className="button">BUTTON</Button>


            </div>
        
        </div>

     );
}

export default Card ;
