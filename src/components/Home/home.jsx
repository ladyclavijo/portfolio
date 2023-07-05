import "./home.css";
import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/logo.png";


function Home () {

    return (
        <div className="container-home">
            <div className="container-header">
                <header>

                    <div className="logo">
                        <Link to="/">
                            <a href="#">Lady</a>
                        </Link>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About me</Link>
                            </li>

                            <li>
                                <Link to="/skills">Skills</Link>
                            </li>

                            <li>
                                <Link to="/curriculum">Curriculum</Link>
                            </li>

                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="nav-responsive">
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </header>
            </div>
        </div>        
    );
};

export default Home; 