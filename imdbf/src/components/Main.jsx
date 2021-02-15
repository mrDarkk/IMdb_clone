import React from 'react';
import CarouselBar from './Carousel';
import MovieCard from './MovieCard';
import MovieCard2 from './MovieCard2';
import MovieAlbum from './MovieAlbum';
import MovieData from './ApiData';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Main() {
    return (
        <>
            <div className="main-container">
                <CarouselBar /><hr />
                <MovieCard />
                <MovieCard />
                <MovieCard /><hr />
                <MovieCard2 />
                <MovieCard2 />
                <MovieCard2 /><hr/>
                <MovieAlbum/>
                <MovieData />
            </div>
        </>
    )
}

export default Main;