import "./home.css";
import React from "react";
import profileImage from "../../images/black.png";
import About from "../About/about";
import Skills from "../Skills/skills";
import Curriculum from "../Curriculum/curriculum";
import Portfolio from "../Portfolio/portfolio";
import Contact from "../Contact/contact";

function Home () {

    return (
        <div className="container-home">
     //------------------------ HEADER SECTION ----------------------
            <div className="container-header">
                <header>

                    <div className="logo">
                            <a href="#">
                                Lady
                            </a>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#about">
                                    About me
                                </a>
                            </li>

                            <li>
                                <a href="#skills">
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a href="#curriculum">
                                    Curriculum
                                </a>
                            </li>

                            <li>
                                <a href="#portfolio">
                                    Portfolio
                                </a>
                            </li>

                            <li>
                                <a href="#contact">
                                    Contact
                                </a>
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
                    <h2>Full Stack Developer</h2>
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

            <About />
            <Skills />
            <Curriculum />
            <Portfolio />
            <Contact />

        </div>        
    );
};

export default Home; 