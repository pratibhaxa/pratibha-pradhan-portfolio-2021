import React, {Component} from "react";
import './Header.css';
import house from './house.png';

class Header extends Component{
    render(){
        return(
            <div>
                <div className='header-div'>
                    
                    <img src={house} className='house-image'/>
                    <span className='space-house-header'></span>
                    {/* <span className='header-component'> HOME </span>
                    <span className='space'></span> */}
                    <span className='header-component'> ABOUT </span>
                    <span className='space'></span>
                    <span className='header-component'> PROJECTS </span>
                    <span className='space'></span>
                    <span className='header-component'> BLOG </span>
                    <span className='space'></span>
                    <span className='header-component'> CONTACT </span>
                </div>
                <br/><br/>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
                <h1>h</h1>
            </div>
        )
    }
}

export default Header;