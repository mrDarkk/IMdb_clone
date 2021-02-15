import React from 'react';
import { Carousel } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function CarouselBar() {
    return (
        <>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/301"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/300"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/302"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselBar;