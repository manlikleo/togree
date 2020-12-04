import React from 'react'
import {Link} from 'react-router-dom'

function Information(props) {
    return (
        <>
            <li className="information_cards_item">
                <div className={props.Cname}>
                    <img className="information_pic" alt={props.alt} src={props.src}/>
                    <div className="information_content">
                        <h3 className="information_header">{props.title}</h3>
                        <p className="information_paragraph">{props.text}</p>
                        <Link className="information_item_link" to={props.path}>{props.pathName}</Link>
                    </div>
                
                </div>
            </li> 
        </>
    )
}

export default Information
