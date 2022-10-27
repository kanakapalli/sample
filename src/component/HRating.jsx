import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HRating(props) {
    let [Movies, setMovies]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/movies")
        .then(response =>{
            console.log(response.data)
            setMovies(response.data)
        })
        .catch(err=> console.log(err))
    },[])

    function updateYear (title,year){
        let updateTitle={Title:title,year}
        console.log(title)
        console.log(year)


        axios.put("http://localhost:4000/movies/update",updateTitle)
        .then(response =>{
            axios.get("http://localhost:4000/movies")
            .then(response =>{
                setMovies(response.data)
            })
            .catch(err=> console.log(err))
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Highest Rating Movies</h1>
            {
            Movies.length&&Movies.map(movie=> <section key={movie.id} style={{display:'inline-block', margin:"5px"}}>
                <img src={movie.Poster} alt={movie.Title}/>
                <p>{movie.Year}</p>
                <button onClick={()=>updateYear(movie.Title,movie.Year)}>Update asdasdasd</button>
            </section>)
            }
        </div>
    );
}

export default HRating;