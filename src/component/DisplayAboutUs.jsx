import React from 'react';
import { useParams } from 'react-router-dom';
import shows from './shows.json'

function DisplayShow(props) {
    let params=useParams()
    let show=shows.tv_shows.find(element=>element.name===params.name)
    return (
        <div  style={{border:"1px solid white",margin:"10px"}} align="center" >
            <h1>Show Details</h1>
            <h3>{show.name}</h3>
            <p>{show.network}</p>
            <p>{show.status}</p>
            <img src={show.image_thumbnail_path} alt={show.name} width={150} height={180}/>
        </div>
    );
}

export default DisplayShow;