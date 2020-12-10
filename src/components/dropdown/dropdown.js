import React, { Component } from 'react'
import Language from './Language'
import './dropdown.css'

 class Dropdown extends Component {

    constructor(props){
    super(props)
        
    this.state = {   
        ShowMenu:false,
        Setlanguage:""
    }    
    }


    handleClick = () => {
        this.setState({ShowMenu: !this.state.ShowMenu});
    }

    handleText = (ev) => {
        this.setState ({
            haveText:ev.currentTarget.textContent
        })
    }
    
    render() {
            const {ShowMenu,Setlanguage}= this.state;

        return (
            <div className={ShowMenu ? "dropdown active":"dropdown"} onClick={this.handleClick}>

                <div className="dropdown_content">
                    <div className="dropdown_text">
                        {!Setlanguage? 'EN': Setlanguage}
                    </div>

                    <div className="drop_icon" onClick={this.Setlanguage}>
                        <i className={this.state.ShowMenu ? 'fas fa-angle-down':'fas fa-angle-up'}> </i>
                    </div>

                </div>
                    
                    <div className="dropdown_items" >
                        {Language.map((item,index)=>{

                            return(
                                <li > <a className={item.cName}  onClick={this.handleText}>{item.title}</a></li> )})} 
                    </div>
            
            </div>
        )
    }


    

    
}
export default Dropdown