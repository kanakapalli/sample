import React, { useState } from 'react';
import "./Subscribe.css";
import Enhance from './Enhance';

function Subscribe(props) {
    let [uname,setUname]=useState('');
    let [email,setEmail]=useState('');
    let [plan,setPlan]=useState('');
    let submitHandler=(e)=>{

    e.preventDefault();
    alert(' Thank you ' + uname + " Payment link is sent to " + email + ' with plan ' + plan)
    }
    return (
        <div>
             <h1>
                Subscription Form
            </h1>
        
            <div id="form-subscribe">
                <form onSubmit={submitHandler}>
                    <input type="text" name="name" className="formStyle" placeholder="Name (required)" 
                    value={uname} onChange={(e)=>setUname(e.target.value)} required />
                    <input type="email" name="email" className="formStyle" placeholder="Email (required)" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}required />
                    <br/>
                    <input type="radio" checked="checked" name="subscribe" 
                    value={plan} onChange={(e)=>setPlan(e.changeEvent.value)}/> Annual Subscription (Rs.999/-)
                    <input type="radio"  name="subscribe" /> Monthly Subscription (Rs.199/-)
                    <input type="submit" className="formButton" value="Subscribe"/>
                </form>
            </div>
        </div>
    );
}

let NewComponent=Enhance(Subscribe)

export default NewComponent;

// export default Subscribe;