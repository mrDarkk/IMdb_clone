import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function MovieCard() {
    return (
        <>
            <div class="container mt-5 " >

                <div class="card movie_card ">
                    <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                        </i>
                        <h5 class="card-title">Toy Story 4</h5>
                        <span class="movie_info">2019</span>
                        <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MovieCard;