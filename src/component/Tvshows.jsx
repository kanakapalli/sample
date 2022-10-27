import React from 'react';
import shows from './shows.json'
import { Link } from 'react-router-dom'
function TvShows(props) {
    let images = shows.tv_shows.map(show => <Link to={'/tv-shows/' + show.name}><img key={show.id}
        style={{ margin: '10px' }}
        src={show.image_thumbnail_path} alt={show.name} width={150} height={180} />
    </Link>)
   return (
        <div>
            <h1>Tv Shows</h1>
            {images}
        </div>
    );
}

export default TvShows;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import shows from './shows.json';

// function Tvshows(props){

//     let images=shows.tv_shows.map(show=><Link to={"/tv-show/"+show.name}><img key={show.id}
//         style={{margin:'10px'}}
//         src={show.image_thumbnail_path} alt={show.name} width={150} height={180}/>
//         </Link>)
//         return (                            
//             <div>
//                 <h1>Tv Shows</h1>
//                 {images}
//             </div>
//         );
//     }


// export default Tvshows;