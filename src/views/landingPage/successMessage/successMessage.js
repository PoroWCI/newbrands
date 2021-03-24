import React, { Component } from "react";
import { Layout } from "antd";
import { ContentTitle } from "../../../components/global";
import { Link } from "react-router-dom";

const { Content } = Layout;

class SuccessMessage extends Component {
  render() {
    return (
      <Layout>
        <Content
          style={{
            margin: "0",
            padding: "70px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>Merci pour votre projet !</ContentTitle>
          <center>
            <Link to="/">Revenir à la page d'accueil</Link>
          </center>
        </Content>
      </Layout>
    );
  }
}

export default SuccessMessage;
