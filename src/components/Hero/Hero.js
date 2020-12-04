import  React from 'react';
import {Button} from '../Button';
import heroImg from './heroimg.png';
import './hero.css';


function Hero(){


    return(
        
        <div className="hero_container">
            <div className="hero_content_container">
                <div className="hero_content">
                    <h1>Make GPS tracking and IoT solutions</h1>
                    <p>
                    Dispatched entreaties boisterous say why stimulated. Certain forbade 
picture now prevent carried she get see sitting. Up twenty limits as months.
Inhabit so perhaps of in to certain. Sex excuse chatty was seemed warmth. 
Nay add far few immediate sweetness earnestly dejection. 
                    </p>
                    <div className="btn-section">
                    <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
        >SELECT ITEM <i class="fas fa-angle-right"></i></Button>

                    <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >MAKE ORDER <i class="fas fa-angle-right"></i></Button>
                    
                    </div>
                </div>
                <div className="hero_image">
                    <img src={heroImg} alt="hero_image"/>
                </div>

                <div  className="social_media_icons">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-whatsapp-square"></i>
                </div>

            </div>
            <div className="sliders">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    
    );
}
export default Hero;
