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
    render() {
            const {ShowMenu,Setlanguage}= this.state;

        return (
            <div className={ShowMenu ? "dropdown active":"dropdown"}
            onClick={this.handleClick}
            >
                <div className="dropdown_content">
                    <div className="dropdown_text">
                        {!Setlanguage? 'Select': Setlanguage}
                    </div>

                    <div className="drop_icon" onClick={this.Setlanguage}>
                        <i className={this.state.Setlanguage ? 'fas fa-angle-down':'fas fa-angle-up'}> </i>
                    </div>

                </div>
                    
                        {Language.map((item,index)=>{

                            return(
                                <li>
                                    <a className={item.cName}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })} 

            
            </div>
        )
    }


    handleClick = () => {
        this.setState({ShowMenu: !this.state.ShowMenu});
    }

    handleText = (ev) => {
        this.setState ({
            HaveText:ev.currenttarget.textContent
        })
    }

    itemList = props => {
        const list = props.map((item) => (
            <div 
            onClick={this.handleText}
                className="dropdown__item"
                key ={item.toString()}>
                {item}
            </div>
        ));

        return (
            <div className="dropdown__items"> {list} </div>
          )


    }
}
export default Dropdown