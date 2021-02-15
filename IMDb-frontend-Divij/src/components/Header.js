import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav className="header">
            {/*Adding logo  */}
            <img className="header__logo" src="" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcHvlB82mXj6YW1aRCt0utyQOebE6DLZMfQ&usqp=CAU" />
            {/* Adding options */}
            <div className="header__nav">
                {/*IMDb Pro*/}
                <div className="header__option">
                    <span className="header__optionlineOne">IMDbPro</span>
                </div>
                {/*Watch list*/}
                <div className="header__option">
                    <span className="header__optionlineOne">Watchlist</span>
                </div>
                {/*Sign in*/}
                <div className="header__option">
                    <span className="header__optionlineOne">Sign In</span>
                </div>
            </div>
        </nav>
    )
}

export default Header;