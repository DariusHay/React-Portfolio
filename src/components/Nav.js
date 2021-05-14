import React from "react";
import { Spring, animated } from "react-spring";
import { Link, useLocation } from "react-router-dom";
import Res from "../pics/Darius-Hay.pdf"
import "./style.css";

export default function Nav() {
    const location = useLocation();
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1500, duration: 1500 }}
        >
            {props => (
                <animated.div style={props}>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                            <Link to="/React-Portfolio" className="navbar-brand" style={{ color: "offWhite", backgroundColor: "transparent", fontSize: 30 }}>Darius Hay</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href={Res} rel="noreferrer" target="_blank">Resume</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} data-toggle="collapse" data-target="#navbarNav">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"} data-toggle="collapse" data-target="#navbarNav">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"} data-toggle="collapse" data-target="#navbarNav">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </animated.div>
            )
            }
        </Spring>
    )
}

