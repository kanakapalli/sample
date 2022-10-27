import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import ClockHook from './ClockHook';
import IpAddress from './IpAddress';
import Profile from './Profile';
class Header extends Component {
    title="Galaxy Star"
    render() {
        return (
            
            <div>
                <img src='/assets/img.png' alt="logo" height={80} width={80}></img>
                <h3 style={{display:'inline-block',verticalAlign:'top'}}>{this.title}</h3>
               
                <Profile/>
                <Clock/>&nbsp;&nbsp;&nbsp;
                <ClockHook/>&nbsp;&nbsp;&nbsp;
                <IpAddress/>&nbsp;&nbsp;&nbsp;
                <Link to="/Subscribe"><button>Subscribe</button></Link>

                
                
            </div>
            
        );
    }
}

export default Header;