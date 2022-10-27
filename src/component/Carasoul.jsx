import React, { Component } from 'react';
import "./Carasoul.css"

class Carasoul extends Component {
    constructor(params){
    super();
    this.images=["/assets/poster1.jpg","/assets/poster2.webp","/assets/poster3.jpg","/assets/poster4.webp"];
    this.state={
    index:0
    }
}
    
    prev=()=>{
        if(this.state.index>0){
        this.setState({index:this.state.index-1});
    }else{
        this.setState({index:this.images.length-1});
    }
}
    next=()=>{
        if(this.state.index<this.images.length-1){
        this.setState({index:this.state.index+1});
    }else{
        this.setState({index:0});
    }
    }
    render() {
        return (
            <div align="center"  className="carousel slide" data-ride="carousel">
                <button className='leftbt' onClick={this.prev}>&lt;</button>
                <img src={this.images[this.state.index]} alt="poster" width={1200} height={400}/>
                <button className='rightbt' onClick={this.next}>&gt;</button>
            </div>
        );
    }
}

export default Carasoul;