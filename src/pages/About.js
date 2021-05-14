import React from "react";
import { Spring, animated } from "react-spring";
import '../components/style.css'
import Dhay from "../pics/DHay.jpg"
import Us from "../pics/walking-down.jpg"

function About() {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1500, duration: 1500 }}
        >
            {props => (
                <animated.div style={props}>
                    <div id="about">
                        <div style={{ width: '80%', }} className="row">
                            <div id="abtContent" className="col-md-12">
                                <div style={{ margin: 10 }} className="clearfix px-3">
                                    <img id="main-pic" src={Dhay} alt="Dhay" className="float-left responsive"
                                        ></img>
                                    <h4 style={{ textAlign: 'center', fontFamily: 'Dancing Script, cursive', fontSize: 50 }}> About me</h4>
                                    <p class="d-inline">My name is Darius Hay, I was born in Palm Beach County Florida but was
                                    raised in Brevard County Florida. I grew up in a great family where I learned to treat
                                    everyone
                                    with respect from both my father and mother. I also learned the qualities of working hard
                            and being deligent in life's desires. <br /> I have grown a passion for web development
                            and I am currently enrolled in the Coding Bootcamp at UCF. This Bootcamp has been a Blessing
                            to me and has helped me excel in my knowledge as a web developer. I have learned coding
                            languages such as, HTML, CSS, JavaScript, JQuery, Node.js, MySql, Sequelize, Express.js, React.js, Handlebars.js, and much more. I have also learned how to use
                            API's and 3rd party styling frameworks such as Bootstrap and Materialize. I've also learned coding styles such as Object oriented programming (OOP) and Model-View-Controller (MVC) Framework.<br />
                            I still have about 1 month left in this bootcamp and have come a long way from the day I
                            began. The support from my instructors in this course has pushed me to learn at a pace that
                            gives me great confidence to believe I will be employer competitive by the end of this
                            course. I
                            am also working with a great group of peers that I am learning along with in this course. I
                            am determined and committed to completing this course with excellence; and going above and
                            beyond in my learning. <br /><img id="main-pic" src={Us} alt="Wife and I" className="float-right responsive"></img> I want to live a Blessed life with my wife and I believe a job as a web developer will
                    help me live the life I want to live. I am a man of Faith and I believe in showing the love of God
                    and helping people whenever I can. I want to have the ability to help others and be an asset to
                    those around me. I want to take my wife to many places and enjoy our time on this Earth. I will
                    bring integrity and deligent working skills to any company that would give me a chance to kick off
                    my career as a web developer.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            )
            }
        </Spring>
    )
}

export default About;