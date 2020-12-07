import React from 'react'
import {Link} from 'react-router-dom'

function Slidercard(props) {
    return (
        <div className="slidercard_container">
            <l1 className="sslidercards_items">
                <div className={props.className}></div>
                <div className="slidercard_content">
                    <h5 className="slidercard_title">{props.title}</h5>
                    <p className="slidercard_subtitle">{props.subtitle}</p>
                    <Link className="slidercard_link" to={props.path}>Read More<i className="fas fa-angle-right"></i> </Link>
                </div>
            </l1>
        </div>
    )
}

export default Slidercard
