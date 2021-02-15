import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './MovieCard2.css';


function MovieCard2() {
    
    return (
        <>
            <div class="movie-card">
                <div class="movie-header manOfSteel">
                    <img class="card2-img" src="http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg " alt=".." />
                    <div class="header-icon-container">
                        {/* <a href="#">
                            <i class="material-icons header-icon"></i>
                        </a> */}
                    </div>
                </div>
                <div class="movie-content">
                    <div class="movie-content-header">
                        <a href="#">
                            <h3 class="movie-title">Man of Steel</h3>
                        </a>
                        <div class="imax-logo"></div>
                    </div>
                    <div class="movie-info">
                        <div class="info-section">
                            <label>Date & Time</label>
                            <span>Sun 8 Sept - 10:00PM</span>
                        </div>
                        <div class="info-section">
                            <label>Screen</label>
                            <span>03</span>
                        </div>
                        <div class="info-section">
                            <label>Row</label>
                            <span>F</span>
                        </div>
                        <div class="info-section">
                            <label>Seat</label>
                            <span>21,22</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard2;