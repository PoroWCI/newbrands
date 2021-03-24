import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import styled from "styled-components";
import "../../../assets/icons/typeIcons/css/typeicons.css";

const { Content } = Layout;

class TypeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStylism: false,
      isConfection: false,
      isModelism: false,
      isSourcing: false,
    };

    this.checkStylism = this.checkStylism.bind(this);
    this.checkSourcing = this.checkSourcing.bind(this);
    this.checkModelism = this.checkModelism.bind(this);
    this.checkConfection = this.checkConfection.bind(this);
  }

  checkStylism() {
    this.setState({ isStylism: !this.state.isStylism });
  }

  checkConfection() {
    this.setState({ isConfection: !this.state.isConfection });
  }

  checkModelism() {
    this.setState({ isModelism: !this.state.isModelism });
  }

  checkSourcing() {
    this.setState({ isSourcing: !this.state.isSourcing });
  }

  componentDidUpdate() {
    localStorage.setItem("isStylism", this.state.isStylism);
    localStorage.setItem("isConfection", this.state.isConfection);
    localStorage.setItem("isModelism", this.state.isModelism);
    localStorage.setItem("isSourcing", this.state.isSourcing);
  }

  componentDidMount() {
    localStorage.getItem("isStylism") &&
      localStorage.getItem("isModelism") &&
      localStorage.getItem("isConfection") &&
      localStorage.getItem("isSourcing") &&
      this.setState({
        isStylism: JSON.parse(localStorage.getItem("isStylism")),
        isConfection: JSON.parse(localStorage.getItem("isConfection")),
        isSourcing: JSON.parse(localStorage.getItem("isSourcing")),
        isModelism: JSON.parse(localStorage.getItem("isModelism")),
      });
  }

  render() {
    const { isStylism, isConfection, isModelism, isSourcing } = this.state;
    return (
      <Layout>
        <NavHeader title="Produits" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px 35px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>
            Ici le système de renseignement des produits
          </ContentTitle>
          <ContentSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ContentSubTitle>
          <center
            style={{
              marginTop: "50px",
              marginBottom: "0",
              fontFamily: "Gelion Medium",
              fontSize: "24px",
            }}
          >
            <Row>
              <Col span={6}>
                <BoxType
                  onClick={this.checkStylism}
                  style={{ borderColor: isStylism ? "#00798C" : "#DDDDDD" }}
                >
                  <BoxIcon
                    className="icon-stylism-icon"
                    style={{ color: isStylism ? "#00798C" : "black" }}
                  />
                  <h3 style={{ color: isStylism ? "#00798C" : "black" }}>
                    Stylisme
                  </h3>
                  <BoxDesc
                    style={{
                      fontFamily: isStylism ? "Gelion Regular" : "Gelion Light",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </BoxDesc>
                </BoxType>
              </Col>
              <Col span={6}>
                <BoxType
                  onClick={this.checkModelism}
                  style={{ borderColor: isModelism ? "#00798C" : "#DDDDDD" }}
                >
                  <BoxIcon
                    className="icon-modelism-icon"
                    style={{ color: isModelism ? "#00798C" : "black" }}
                  />
                  <h3 style={{ color: isModelism ? "#00798C" : "black" }}>
                    Modelisme
                  </h3>
                  <BoxDesc
                    style={{
                      fontFamily: isModelism
                        ? "Gelion Regular"
                        : "Gelion Light",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </BoxDesc>
                </BoxType>
              </Col>
              <Col span={6}>
                <BoxType
                  onClick={this.checkConfection}
                  style={{ borderColor: isConfection ? "#00798C" : "#DDDDDD" }}
                >
                  <BoxIcon
                    className="icon-confection-icon"
                    style={{ color: isConfection ? "#00798C" : "black" }}
                  />
                  <h3 style={{ color: isConfection ? "#00798C" : "black" }}>
                    Confection
                  </h3>
                  <BoxDesc
                    style={{
                      fontFamily: isConfection
                        ? "Gelion Regular"
                        : "Gelion Light",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </BoxDesc>
                </BoxType>
              </Col>
              <Col span={6}>
                <BoxType
                  onClick={this.checkSourcing}
                  style={{ borderColor: isSourcing ? "#00798C" : "#DDDDDD" }}
                >
                  <BoxIcon
                    className="icon-sourcing-icon"
                    style={{ color: isSourcing ? "#00798C" : "black" }}
                  />
                  <h3 style={{ color: isSourcing ? "#00798C" : "black" }}>
                    Sourcing
                  </h3>
                  <BoxDesc
                    style={{
                      fontFamily: isSourcing
                        ? "Gelion Regular"
                        : "Gelion Light",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </BoxDesc>
                </BoxType>
              </Col>
            </Row>
          </center>
        </Content>
      </Layout>
    );
  }
}

export default TypeProject;

const BoxIcon = styled.i`
  font-size: 50px;
  color: black;
  margin-bottom: 10px;
  font-family: "typeicons";
`;

const BoxDesc = styled.p`
  font-size: 16px;
  font-family: Gelion Regular;
  color: black;
`;

const BoxType = styled.div`
  padding: 10px 10px;
  margin: 10px;
  border: 1px solid #dddddd;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
