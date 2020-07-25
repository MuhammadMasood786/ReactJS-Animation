import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg  colorChange">
                            <NavLink className="navbar-brand" to="/">Animation </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">                                
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="services">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                                        </li>
                                       
                                    </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
