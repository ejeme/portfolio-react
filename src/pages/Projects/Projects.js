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
import data from "../../data.json";
import "./Projects.css";


class Projects extends Component {
state = {
    data
  };

handleItemClick = id => {
      console.log(id)
      window.location.href = id;
      }
    
  render() {
   return (
      <div>
        <h1 className="projects"> Projects </h1>
        <Container>
          {this.state.data.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              url={item.url}
              handleClick={this.handleItemClick}
              image={item.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Projects;