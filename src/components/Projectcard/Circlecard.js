import React from 'react'

function Circlecard(props) {
    return (
        <>
           <li className="circlecards_item">
            <div className="circlecards_item_container">
                <div className="circlecards_inner_circle"> 
    <h3 className="circlecards_header">{props.title}</h3>
    <p className="circlecards_sub_header">{props.subTitle}</p>
                    </div>
            </div>
            </li> 
        </>
    )
}

export default Circlecard
