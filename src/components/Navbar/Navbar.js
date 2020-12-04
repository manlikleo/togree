import React,{Component} from 'react';
import  {MenuItems} from "./MenuItems"
import './Navbar.css';
import logo from './logo.png';

class Navbar extends Component {
    
    
    state = {clicked:false}
    toggleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }



    render() {
        return (
            <nav className="NavbarItems">

            <div >
                <img src={logo} alt="logo" className="Nav-logo" />
            </div>

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
        
                <div className="menu-icon" onClick={this.toggleClick}>
                <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>

                

                <div className="nav-icon" onClick={this.searchClick}>
                <i className= 'fas fa-search'></i>
                </div>

            </nav>
        )
    }
}
export default Navbar