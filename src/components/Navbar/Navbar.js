import React,{Component} from 'react';
import  {MenuItems} from "./MenuItems"
import './Navbar.css';
import logo from './logo.png';
import Dropdownmenu from '../dropdown/dropdown'



class Navbar extends Component {
    
    
    state = {clicked:false}
    toggleClick = () =>  {
        this.setState({clicked:!this.state.clicked})
    }



    render() {
        return (
            <nav className="NavbarItems">

            <div className="logo_menu_container">
                <img src={logo} alt="logo" className="Nav-logo" />
            
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item,index)=> {
                      return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                      )  
                    })} 
                </ul>
            </div>

            <div className="nav_icons_container">

                <div className="menu-icon" onClick={this.toggleClick}>
                <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>

                <div className="nav-icon" onClick={this.searchClick}>
                <i className= 'fas fa-search'></i>
                </div>

                <div className="Language_changer">
                        <Dropdownmenu/>
                </div>

            </div>
        </nav>
        )
    }
}
export default Navbar