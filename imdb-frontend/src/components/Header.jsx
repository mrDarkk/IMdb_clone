import React from 'react';
import { Dropdown } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Menu</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}

                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdawn-menu">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item><hr/>
                                <Dropdown.Item href="#/action-4">Advance Search</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;


<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
                            </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
</li>