import React from "react";
import { Spring, animated } from "react-spring";
import '../components/style.css';

function Contact() {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1500, duration: 1500 }}
        >
            {props => (
                <animated.div style={props}>
                    <div id="contact">
                        <div style={{ width: '80%', }} className="row">
                            <div id="abtContent" className="col-md-12">
                                <h1 style={{ textAlign: 'center', fontFamily: 'Dancing Script, cursive', textDecorationSkipInk: 'none' }}><u><b>Contact Me</b></u></h1>
                                <ul style={{ fontSize: 20, textDecorationSkipInk: 'none' }}>
                                    <li>Email: <a target="blank_" rel="noreferrer" className="mailto" href="mailto:dariushay@gmail.com">dariushay@gmail.com</a></li>
                                    <li>LinkedIn: <a href="https://www.linkedin.com/in/darius-hay-8b24a6200/" target="_blank" rel="noreferrer">Darius Hay</a>
                                    </li>
                                    <li>GitHub: <a href="https://github.com/DariusHay" target="_blank" rel="noreferrer">@DariusHay</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </animated.div>
            )
            }
        </Spring>
    )
}

export default Contact;