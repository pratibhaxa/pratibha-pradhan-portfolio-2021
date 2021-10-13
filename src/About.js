import React, {Component} from "react";
import './About.css';
import Header from "./Header";
import aboutimg from './profile.jpg';

class About extends Component{
    render(){
        return(
            <div>
                <Header />
                <table>
                    <tr>
                        <td>
                            <div className='about-table-left'>
                            Hello, 
                            <br/>
                            My name is Pratibha Pradhan, I am a full stack developer currently working at Accenture.<br/>
                            Located in Bengaluru, Karnataka, India.
                            </div>
                        </td>
                        <td className='about-table-right'>
                            <img src={aboutimg} alt='This is the profile image' className='about-table-image'/>
                        </td>
                    </tr>
                </table>
                <br/>
                <br/>
                {/* <span>
                    Hello, 
                    <br/>
                    My name is Pratibha Pradhan, I am a full stack developer currently working at Accenture, Bengaluru, Karnataka, India.
                </span>
                <span>
                    <img src={aboutimg} alt='This is the profile image'/>
                </span> */}
            </div>
        )
    }
}

export default About;