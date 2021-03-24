import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <center>
        <h1>Erreur 404 cette page n'exite pas...</h1>
        <Link to="/">Retourner à l'accueil</Link>
      </center>
    );
  }
}

export default NotFound;
