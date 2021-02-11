import React from 'react';
import './Main.css';
import SideBarBox from './SideBarBox';
import Carousel from './Carousel';

function Main() {

    return (
        <>
            <div>
                <div className="carosel-container">
                    <Carousel/>
                </div>
                <div className="side-bar">
                    <div className="side-bar-upper">Up Next</div>
                    <SideBarBox/>
                    <div className="side-bar-bottom">Brouse trailers </div>
                </div>
            </div>
        </>
    )
}

export default Main;




