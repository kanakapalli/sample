import React, { Component } from 'react';

export default function Enhance(OldComponent) {
    return class extends Component{
    render() {
        return <div style={{backgroundColor:"green",
            border:'1px solid blacl',
            borderRadius:'20px',
            padding:'40px',
            height:'500px',
            margin:'10px'}}>
                <OldComponent/>
                
            </div>
        }
    }
}

