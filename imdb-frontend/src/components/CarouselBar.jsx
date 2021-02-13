import React from 'react';
import './CarouselBar.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


function CarouselBar() {
    return (
        <>
            <Carousel className="carousel-bar">
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://source.unsplash.com/random"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Movie!-1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/random"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>Movie!-1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/random"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>Movie!-1</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselBar;