import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
    return (
        <>
            <li className="cards_item">
                <div className="cards_item_container">
                <div className="cards_item_top">
                    <img src={props.src} alt={props.alt} className="card_item_img"/>
                        <h4 className="card_item_title">{props.title}</h4>
                            <div className="card_item_dot"></div>
                </div>

                <p className="card_item_paragraph">{props.text}</p>
                <Link className="card_item_link" to={props.path}>{props.pathName}</Link>
                </div>
            </li> 
        </>
    )
}

export default Card
