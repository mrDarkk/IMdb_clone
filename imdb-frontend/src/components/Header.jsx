import React from 'react';
import { Dropdown } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">IMDb</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <Dropdown className="dropdawn-container-menu">
                        <Dropdown.Toggle className="menu-btn" id="dropdown-basic">
                            Menu
                            </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdawn-menu m">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item><hr />
                            <Dropdown.Item href="#/action-4">Advance Search</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                  
                    <Dropdown className="dropdawn-container-all">
                        <Dropdown.Toggle className="all-btn" id="">
                            All
                            </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdawn-menu">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item><hr />
                            <Dropdown.Item href="#/action-4">Advance Search</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-wishlist mr-2 ml-3">WishList</button>
                    <button className="btn btn-signin mr-2 ml-2">SignIn</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;

