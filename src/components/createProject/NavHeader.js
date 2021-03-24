import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { Route } from "react-router-dom";

const { Header } = Layout;

class NavHeader extends Component {
  render() {
    return (
      <Header
        style={{
          padding: "20px 50px",
          backgroundColor: "white",
        }}
      >
        <Row justify="space-between">
          <Col>
            <span
              style={{
                fontFamily: "Gelion Regular",
                fontSize: "16px",
                color: "black",
              }}
            >
              {this.props.title}
            </span>
          </Col>
          <Col>
          <Route
          render={({ history }) => (
           <button onClick={() => history.goBack()} style={{
            textDecoration: "underline",
            fontFamily: "Gelion Bold",
            fontSize: "16px",
            color: "black",
            outline: "none",
            border: "none",
            background: "none",
            cursor: "pointer"
          }}>Quitter</button>
          )}
        />
            {/* <Link
              to="/dashboard"
              style={{
                textDecoration: "underline",
                fontFamily: "Gelion Bold",
                fontSize: "16px",
                color: "black",
              }}
            >
              Quitter
            </Link> */}
          </Col>
        </Row>
      </Header>
    );
  }
}

export default NavHeader;
