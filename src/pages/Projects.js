import React from "react";
import { Spring, animated } from "react-spring";
import '../components/style.css';
import apps from "../utils/apps.js"

function Projects() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: 500 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 1000, duration: 1000 }}
        >
            {props => (
                <animated.div style={props}>
                    <div>
                        <h1 style={{ textAlign: 'center', fontFamily: 'Dancing Script, cursive', textDecorationSkipInk: 'none', fontSize: 50, marginBottom: '5%' }}><u><b>My Projects</b></u></h1>
                        <div className="row" style={{ marginLeft: '2%' }}>
                            {apps.map(app => (
                                <div style={{ marginLeft: '2%', marginBottom: '5%' }} key={app.id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img style={{ height: 200 }} id="appPic" src={app.image} className="card-img-top" alt={app.title}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{app.title}</h5>
                                            <p className="card-text">{app.text}
                                            </p>
                                            <hr></hr>
                                            <a style={{ float: 'left' }} href={app.site} target="_blank" rel="noreferrer">Deployed<br />Site</a>
                                            <a style={{ marginLeft: '15%', float: 'right' }} href={app.github} target="_blank" rel="noreferrer">GitHub<br />Repo</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </animated.div>
            )
            }
        </Spring >
    )
}

export default Projects;