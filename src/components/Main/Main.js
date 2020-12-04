import React from 'react'
import Maincard from './Maincard';
import Avatar from  './avatar.png';
import Avatar1 from './avater2.png';
import Avatar2 from  './avatar3.png';
import {Button} from  '../Button'
import './Main.css';

function Main(){


    return(
        
        <div className="Main_services_container">

            <h3 className="Main_services_title">Our Main Services</h3>
            <p className="Main_services_subtitle">Inhabiting discretion the her dispatched decisively boisterous joy.<br/>
                So form were wish open is able of mile of. Waiting express if prevent it we an musical. 
            </p>
          
            <div className="Main_services_cards">
                <ul className="Main_services_items"> 
                    <Maincard
                        cName='Maincard_container'
                        src={Avatar}
                        alt='main_img'
                        title='GPS Tracker'
                    />
                    <Maincard
                        cName='Maincard_green'
                        src={Avatar1}
                        alt='main_img'
                        title='Asset Tracker'
                    />
                    <Maincard
                        cName='Maincard_container'
                        src={Avatar2}
                        alt='main_img'
                        title='Smart Camera'
                    />
                </ul>
            </div>

            <div  className="Main_services_btn">
                <Button 
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--small"
                >MORE SERVICES <i className="fas fa-angle-right"></i></Button>
            </div>
        
        </div>
    
    );
}
export default Main;
