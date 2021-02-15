import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './style.css';

function MovieCard() {
    return (
        <>
            <div className="movie-card" style={{ width: '16rem', height:'21rem', backgroundColor:'black' }}>
                {/* <Card style={{ width: '18rem' }}> */}
                    <Card.Img variant="top" src="https://www.joblo.com/assets/images/joblo/posters/2018/11/Spider-Verse-poster-1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                {/* </Card> */}
            </div>
        </>
    )
}


export default MovieCard;