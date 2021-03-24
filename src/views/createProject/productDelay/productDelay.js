import React, { Component } from "react";
import { Layout } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";

import CustomRadio from "../../../components/createProject/customRadio";
import CustomRadioInput from "../../../components/createProject/customRadioInput";

const { Content } = Layout;

class ProductDelay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDelay: 0,
      date: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if (this.state.selectedDelay !== value) {
      this.setState({ selectedDelay: value });
    } else {
      this.setState({ selectedDelay: 0 });
    }
  }

  handleClick2(value) {
    if (this.state.selectedDelay !== value) {
      this.setState({ selectedDelay: value });
    }
  }

  handleChange = async (e) => {
    await this.setState({ date: e.target.value });
  };

  render() {
    return (
      <Layout>
        <NavHeader title="Délais attendus" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px 10px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>Délais attendus</ContentTitle>
          <ContentSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ContentSubTitle>
          <center
            style={{
              fontFamily: "Gelion Medium",
              padding: "40px 100px 0 100px",
            }}
          >
            <CustomRadio
              onClick={() => this.handleClick(1)}
              isSelected={this.state.selectedDelay === 1}
              title="Dans 1 mois"
            />
            <CustomRadio
              onClick={() => this.handleClick(3)}
              isSelected={this.state.selectedDelay === 3}
              title="Dans 3 mois"
            />
            <CustomRadio
              onClick={() => this.handleClick(6)}
              isSelected={this.state.selectedDelay === 6}
              title="Dans 6 mois"
            />
            <CustomRadio
              onClick={() => this.handleClick(12)}
              isSelected={this.state.selectedDelay === 12}
              title="Dans 1 an"
            />
            <CustomRadioInput
              onClick={() => this.handleClick2(24)}
              isSelected={this.state.selectedDelay === 24}
              title="Ajouter une date précise"
              onInput={null}
            />
          </center>
        </Content>
      </Layout>
    );
  }
}

export default ProductDelay;
