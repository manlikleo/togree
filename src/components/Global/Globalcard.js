import React from 'react'



function Globalcard(props){


    return(
        
        
            <li className="Globalcard_item">
                <div className="Globalcard_container">
    <h3 className="Globalcard_title">{props.title}</h3>
                    <p className="Globalcard_subtitle" >Success stories</p>
                </div>
            </li>

     
    );
}
export default Globalcard;
