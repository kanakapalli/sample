import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function Help(props) {
   
    return (
        <div>
          
           <Link to="/help/FAQ"> FAQ</Link><br></br>
           <Link to="/help/about">About</Link>
           <Outlet></Outlet>
        </div>
    );
}

export default Help;