import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


function App () {
    return (
        <Router>
            <div>
                <Nav />
                <Route exact path="/React-Portfolio" component={Home}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/projects" component={Projects}/>
                <Footer />

            </div>
        </Router>
    )
}

export default App;
