import React from 'react'
import {Button} from  '../Button'
import './Global.css';
import Globalcard  from './Globalcard'
import Globalpic from './Global.png'

function Global(){


    return(
        
        <div className="Global_container">

            <img src={Globalpic} alt='Global_image' className="Global_container_pic" />

            <div className="Global_content">

                <h3 className="Global_header">Join our large global community</h3>

                <p className="Global_subheader" >Especially reasonable travelling she son. Resources resembled forfeited 
                    no to zealously. Has procured daughter how friendly followed repeated 
                    who surprise. Great asked oh under on voice downs. Law together 
                    prospect kindness securing six. Learning why get hastened smallest cheerful.
                    So form were wish open is able of mile of. Waiting express if prevent it.
                </p>

                <div className="Globalcards_container">
                    <ul className="Globalcards_items">
                        <Globalcard

                        title='653'

                        />
                        <Globalcard

                        title='248'

                        />
                        <Globalcard

                        title='30782'

                        />
                        
                    </ul>
                </div>

                <div className="Globalcard_btn">
                    <Button 
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--small"
                >JOIN NOW <i className="fas fa-angle-right"></i></Button>
                </div>

            </div>
        </div>
    
    );
}
export default Global;
