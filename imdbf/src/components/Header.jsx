import React from 'react';
// import { Navbar, Button, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark">
                <a class="navbar-brand " href="#"><h2>IMDb</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><h4> Home</h4><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><h4>Movies</h4></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               <h4>Categories</h4> 
                            </a>
                            <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"><h4>Movies</h4></a>
                                <a class="dropdown-item" href="#"><h4>Web-Series</h4></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#"><h4>Top-Rated</h4></a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#"><h4>Latest</h4></a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-lg-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header;