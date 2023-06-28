import React from "react";
import Link from "next/link";
import logo from "../../images/logo.jpg";

const header = () => {

    return (
        <div className="container-header">
            <header>
                <div className="logo">
                    <Link href="/">
                        <a>
                            <img src={logo} alt="logo"/>
                        </a>
                    </Link>
                </div>

                <nav id="nav">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>About</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/about">
                                <a>About me</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/skills">
                                <a>Skills</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/cv">
                                <a>Curriculum Vitae</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/portfolio">
                                <a>Portfolio</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default header;