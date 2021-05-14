import React from "react";
import { Spring, animated } from "react-spring";
import '../components/style.css';
import D from "../pics/D.png"

export default function Home() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 1000, duration: 1000}}
        >
            {props => (
                <animated.div style={props}>
                    <div className='row'>
                        <div className="col-md-3">
                            <img style={{ height: 500 }} alt='home pic' src={D} />
                        </div>
                        <div className="col-md-7">
                            <h1 style={{ textAlign: 'center', margin: '5%' }}>Web Developer</h1>
                            <h4 style={{ fontFamily: 'Dancing Script, cursive', fontSize: 50 }}>"Junior Full Stack Web Developer who loves to learn <br />and works hard to apply new techniques."</h4>
                            {/* <img alt='coding picture' src=""></img> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div id="section">
                        <div className="col-md-12">
                            <h1 id="skills" style={{ textAlign: 'center', color: 'white' }}>Skills</h1>
                        </div>
                        <div className="row" style={{ marginLeft: '15%', fontSize: 20 }}>
                            <div className="col-md-4">
                                <ul style={{ color: 'white' }}>
                                    <li> HTML</li>
                                    <li> CSS</li>
                                    <li> JavaScript</li>
                                    <li> JQuery</li>
                                    <li> Bootstrap</li>
                                    <li> Materialize</li>
                                    <li> Foundation</li>


                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul style={{ color: 'white' }}>
                                    <li> React.js</li>
                                    <li> Handlebars/Templating</li>
                                    <li> JQuery AJAX</li>
                                    <li> Axios</li>
                                    <li> Express</li>
                                    <li> Webpack</li>
                                    <li> Test Driven Development</li>

                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul style={{ color: 'white' }}>
                                    <li> Node.js</li>
                                    <li> MySQL</li>
                                    <li> Sequqlize</li>
                                    <li> MongoDB</li>
                                    <li> Mongoose</li>
                                    <li> GIT</li>
                                    <li> Heroku</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h1 id="more" style={{ textAlign: 'center', color: 'white' }}>and more...</h1>
                        </div>
                    </div>
                </animated.div>
            )
            }
        </Spring >
    )
}