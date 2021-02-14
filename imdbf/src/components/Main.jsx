import React from 'react';
import CarouselBar from './Carousel';
import MovieCard from './MovieCard';
import MovieCard2 from './MovieCard2';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Main(){
    return(
        <>
        <CarouselBar/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard2/>
        <MovieCard2/>
        <MovieCard2/>
        <MovieCard2/>
        <MovieCard2/>
        </>
    )
}

export default Main;