import React, { Component } from "react";
import { Layout, Row } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import CustomTextField from "../../../components/createProject/customTextField";

const { Content } = Layout;

class PlaceOfShip extends Component {
  state = {
    adresseValue: "",
  };

  onAdressInput = (e) => {
    this.setState({
      adresseValue: e.target.value,
    });
  };

  render() {
    return (
      <Layout>
        <NavHeader title="Lieu de livraison" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>Lieu de livraison</ContentTitle>
          <ContentSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ContentSubTitle>
          <center
            style={{
              padding: "70px 20%",
              fontFamily: "Gelion Medium",
              fontSize: "24px",
            }}
          >
            <Row>
              <CustomTextField
                label="Adresse postale"
                onInput={this.onAdressInput.bind(this)}
              />
            </Row>
          </center>
        </Content>
      </Layout>
    );
  }
}

export default PlaceOfShip;
