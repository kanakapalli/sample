import React, { Component } from 'react';
import "./Listdisplay.css"

class Listdisplay extends Component {
    render(){
    let tiles= this.props.movies.map(movie=> <section className="container" key={movie.Title}>
    <img className="img" src={movie.Images[0]} alt="display" width={140} height={140}/>
    <div className="bottom-left">
    <p>{movie.Title}</p>
    </div>
</section>)
    
        return (
            
            <div>
                <h2>{this.props.title}</h2>
                {tiles}
            </div>
        );
    }
}

export default Listdisplay;