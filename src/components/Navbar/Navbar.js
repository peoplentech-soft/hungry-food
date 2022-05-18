import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar__main sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid nav-container">
                    <a className="navbar-brand" href="#/"><strong>HungryFood</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Special</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Event</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Chefs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Contact</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn nav-link nav-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Booking</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;