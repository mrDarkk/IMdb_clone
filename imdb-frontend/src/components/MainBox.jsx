import React from 'react';
import './MainBox.css';
import SideBarBox from './SideBarBox';
import CarouselBar from './CarouselBar';

function MainBox() {

    return (
        <>
            <div className="below-head-container row">
                <div className="carosel-container ">
                    <CarouselBar/>
                </div>
                <div className="side-bar ">
                    <div className="side-bar-upper">Up Next</div>
                    <SideBarBox/>
                    <SideBarBox/>
                    <SideBarBox/>
                    <div className="side-bar-bottom">Brouse trailers </div>
                </div>
            </div>
            
        </>
    )
}

export default MainBox;




