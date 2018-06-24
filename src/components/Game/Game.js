import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import data from "../../data.json";

class Game extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Container>

        </Container>
        <Footer />
      </div>
    );
  }
}

export default Game;
