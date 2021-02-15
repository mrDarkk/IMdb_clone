import React from 'react';

const image_api = "https://image.tmdb.org/t/p/w1280";
const Movies = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img src={ image_api + poster_path } alt={title} />
        <div className="movie_info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        <div className="movie_over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
);
export default Movies;
