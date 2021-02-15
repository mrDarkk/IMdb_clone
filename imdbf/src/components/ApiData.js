import React, { useState, useEffect } from 'react';
// import axios from './axios';
import axios from 'axios';

// const fetchUrl = "https://api.themoviedb.org/3/movie/550?api_key=777a0788210c64c221fcf540719e0455"
const fetchUrl = "https://api.themoviedb.org/3/movie/76341?api_key=777a0788210c64c221fcf540719e0455"

function MovieData() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // setMovies(request.data.title);
            console.log(request);
            // return request;
        }
        fetchData();

    }, [fetchUrl]);

    return (
        <>
            <h1>{movies}</h1>
        </>
    )

}

export default MovieData;
