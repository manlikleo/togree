import React, { Component } from 'react'
import Slidercard from './Slidercard'
import {Button} from  '../Button'
import './slider.css';


 class slider extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        return (

            <div className="slider_container">

            <div className="slider_content">
                <h3 className="slider_title">Latest News</h3>
                <p className="slider_subtitle">Not thoughts all exercise blessing. Indulgence way everything 
joy alteration boisterous the attachment. Party we years to order allow asked of.               </p>
            </div>         
                    <div className="slidercards_containers">
                    <i className="fas fa-angle-left togglebtns"></i>
                            <ul className="slidercards_items">
                                <Slidercard
                                  
                                 title='COVIF-19 Disrups Transportation in Lagos'
                                 subtitle='Musical by me through he drawing savings an. No we stand
                                 avoid decay heard mr. Common so wicket appear to sudden 
                                 worthy on. Shade of offer ye whole stood hoped. '
                                 path='/'
                                />
                                <Slidercard/>
                                <Slidercard/>
                            </ul>
                            <i className="fas fa-angle-right togglebtns"></i>
                    </div>

                    <Button 
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--small"
                    >ALL NEWS ARTICLES <i className="fas fa-angle-right"></i></Button>
        
                
            </div>
        )
    }
}

export default slider
