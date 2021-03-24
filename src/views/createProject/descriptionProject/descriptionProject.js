import React, { Component } from "react";
import { Layout, Row } from "antd";
import { ContentTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import CustomTextField from "../../../components/createProject/customTextField";

const { Content } = Layout;

class DescriptionProject extends Component {
  state = {
    description: "",
  };

  onInputDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <Layout>
        <NavHeader title="Description" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>
            Décrivez nous en quelques mots votre projet
          </ContentTitle>
          <center
            style={{
              padding: "40px 10%",
              fontFamily: "Gelion Medium",
              fontSize: "24px",
            }}
          >
            <Row>
              <CustomTextField
                label="Description de votre projet"
                onInput={this.onInputDescription}
                multiline={true}
                rows={10}
              />
            </Row>
          </center>
        </Content>
      </Layout>
    );
  }
}

export default DescriptionProject;
