import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ClickItem from "../../components/ClickItem";
import Footer from "../../components/Footer";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import data from "../../data.json";


class Home extends Component {

  render() {
    return (

      <div>
          <Header />
      </div>


    );
  }
}

export default Home;



/*
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import data from "../../data.json";


class Main extends Component {

  state = {
    data
  };

 getValue() {
   return this.state.url
 }


handleItemClick = event => {
  const target = event.currentTarget;
  const value = target.url;
  if (this.props.onItemClick) {
    this.props.onItemClick(event);
}
}

  render() {
    return (
      <div>
        <Sidebar />
        <Nav />
        <Header />
        <About />
        <Projects> 
        {this.state.data.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              handleClick={this.handleItemClick}
              image={item.image}
            />
          ))}        
        </Projects> 
        <Contact />
        <Footer />
      </div>

    );
  }
}

export default Main;
*/