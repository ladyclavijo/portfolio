import "./home.css";
import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../images/black.png";


function Home () {

    return (
        <div className="container-home">
     //------------------------ HEADER SECTION ----------------------
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

      //------------------------ HOME SECTION -------------------
            <section id="home" className="index">
                <div className="container-banner">
                    <div className="container-img">
                        <img src={profileImage} alt=""/>
                    </div>
                    <h1>Lady Clavijo</h1>
                    <h2>Jr. Full Stack Developer</h2>
                    <div className="networks">
                        <a href="https://www.linkedin.com/in/ladyclavijo/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/ladyclavijo" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </section>

        </div>        
    );
};

export default Home; 