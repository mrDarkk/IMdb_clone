import React from 'react';
import './SideBarBox.css';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {PlayCircleOutlineIcon} from '@material-ui/icons/PlayCircleOutline';

function SideBarBox(){
    return(
        <>
        <div className="side-box-container row ml-3">
            <div className="image-bar"><img className="side-image m-1" src="https://source.unsplash.com/random/tech"/></div>
            <div className="image-info-bar ml-2 ">
                <div className="play-menu">
                    <span className="play-icon"> {PlayCircleOutlineIcon} play</span>
                    <span>01:30</span>
                </div>
                <div className="image-info">
                    XXXXXXXXXXXXXXXXX
                </div>
                <div className="image-info-second">
                    xxxxxxxxxxxxxxxx
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBarBox;