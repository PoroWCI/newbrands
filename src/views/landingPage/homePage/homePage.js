import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <center>
        <h1>Bienvenue sur NewBrands !</h1>
        <Link to="/createProject">Créer un projet</Link>
      </center>
    );
  }
}

export default HomePage;
