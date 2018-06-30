/*import React from "react";
import Home from "./pages/Home";

const App = () => <Home />;

export default App;
*/


import React from "react";
import { BrowserRouter as Router, Route, Link, Index } from "react-router-dom";
import {createBrowserHistory} from "history"
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => (
    <Router history={createBrowserHistory}>
      <div>
        <Sidebar />
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
export default App;

/*
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/projects" component={Projects} />
<Route path="/contact" component={Contact} />
*/