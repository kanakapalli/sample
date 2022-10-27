import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navsection extends Component {
    render() {
        return (
            <div>
                
                <Link to="/help/FAQ">FAQ</Link>
                <Link to="/help/Aboutus">Aboutus</Link>
                <Link to="/help/Contact">Contact</Link>
            </div>
        );
    }
}

export default Navsection;