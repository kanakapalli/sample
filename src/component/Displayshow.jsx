import React from 'react';
import {useParams} from 'react-router-dom';
import shows from './shows.json'

function DisplayShow(props) {
    let params=useParams()
    let show=shows.tv_shows.find(element=>element.name===params.name)
    return (
        <div>
            <h1>Show Details</h1>
            <h3>{show.name}</h3>
            <p>{show.network}</p>
            <p>{show.status}</p>
            <img src={show.image_thumbnail_path} alt={show.name}/>
        </div>
    );
}

export default DisplayShow;
// import React from 'react';
// // import shows from './shows.json';


// function Displayshow(props) {
    
//         return (
//             <div>
//                 <p>ugdiuygcycyychdfusgjxfduycxjvhdchjvxdyvjh</p>
//                 <h1>Show Details</h1>
                
//             </div>
//         );
//     }


// export default Displayshow;