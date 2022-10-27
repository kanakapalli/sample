import React from 'react';
import {useRef} from 'react';
import './Subscribe.css';
import Enhance from './Enhance';

function Feedback(props) {
    let user=useRef();
    let subject=useRef();
    let comments=useRef();
    
    let submitHandler =(e)=>{
        e.preventDefault();
        alert("Thank you !! our executive will reach out to you on " +user.current.value)
    }
    return (
        <div>
             <h1 id="header1">
                Please fill Form to provide Feedback
            </h1>
            <div id="form-subscribe">
                    <form onSubmit={submitHandler}>
                        
                        <input type="text" className="formStyle" placeholder="Email" ref={user}/>
                        <input type="subject" className="formStyle" placeholder="What is this all about " ref={subject}/>
                        <br />
                        <textarea className="formStyle" placeholder="Description " ref={comments}></textarea>
                        <input type="submit" className="formButton" />                   
                    </form>
                </div>
        </div>
    );
}

// export default Feedback;
let NewComponent=Enhance(Feedback)

export default NewComponent;