import React from 'react'

function Maincard(props) {
    return (
        <>
           <li className="Maincard_item">
                <div className={props.cName}>
                        <img alt={props.alt} src={props.src} className="Maincard_avatar"/>
                        <h3  className="Maincard_title">{props.title}</h3>
                        <i className="fas fa-angle-down"></i>
                </div>
            </li> 
        </>
    )
}

export default Maincard
