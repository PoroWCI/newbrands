import React, { Component } from "react";
import { Layout, Row, Col, Progress } from "antd";
import { Link } from "react-router-dom";
import { ButtonFooter, ButtonFooterOutlined } from "../global";

const { Footer } = Layout;

class NavFooter extends Component {
  render() {
    return (
      <Footer
        style={{
          backgroundColor: "white",
          height: "120px",
          zIndex: "3",
          position: "fixed",
          bottom: "0",
          width: "calc(100% - 300px)",
        }}
      >
        <Progress
          percent={this.props.percent}
          showInfo={false}
          strokeColor="#00798c"
          type="line"
          strokeWidth="2px"
          style={{ marginBottom: "5px" }}
        />
        <Row justify="space-between">
          <Col>
          {this.props.percent !== 0 && <>
            <Link to={this.props.prev}>
              <ButtonFooterOutlined>Retour</ButtonFooterOutlined>
            </Link>
            </>}
          </Col>
          <Col>
            {this.props.isFinished ? (
              <a href="/dashboard">
                <ButtonFooter>Continuer</ButtonFooter>
              </a>
            ) : (
              <Link to={this.props.next}>
                <ButtonFooter onClick={this.props.goNext}>
                  Continuer
                </ButtonFooter>
              </Link>
            )}
          </Col>
        </Row>
      </Footer>
    );
  }
}

export default NavFooter;
