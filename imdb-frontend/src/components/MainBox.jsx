import React from 'react';
import './MainBox.css';
// import SideBarBox from './SideBarBox';
// import Carousel from './Carousel';

function MainBox() {

    return (
        <>
            <div>
                <div className="carosel-container">
                    {/* <Carousel/> */}
                </div>
                <div className="side-bar">
                    <div className="side-bar-upper">Up Next</div>
                    {/* <SideBarBox/> */}
                    <div className="side-bar-bottom">Brouse trailers </div>
                </div>
            </div>
        </>
    )
}

export default MainBox;




