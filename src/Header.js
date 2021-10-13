import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Header.css';
import house from './house.png';

class Header extends Component{
    render(){
        return(
            <div>
                <div className='header-div'>
                    <Link to='/home'><img src={house} className='house-image'/></Link> 
                    <span className='space-house-header'></span>
                    {/* <span className='header-component'> HOME </span>
                    <span className='space'></span> */}
                    <span className='header-component'><Link to='/about' className='header-link'> ABOUT </Link></span>
                    <span className='space'></span>
                    <span className='header-component'><Link to='/projects' className='header-link'> PROJECTS </Link></span>
                    <span className='space'></span>
                    <span className='header-component'><Link to='/blog' className='header-link'> BLOG </Link></span>
                    <span className='space'></span>
                    <span className='header-component'><Link to='/contact' className='header-link'> CONTACT </Link></span>
                </div>
                <br/><br/>
                
            </div>
        )
    }
}

export default Header;