import React, { Component } from "react";
import { Col, Layout, Row } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";
import CustomRadio from "../../../../components/createProject/customRadio";

import { API } from '../../../../config'
import axios from 'axios'

const { Content } = Layout;

class ProductType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 0,
      date: "",
      displayCategories: []
    };
  }

  handleClick(value) {
    if (this.state.selectedType !== value) {
      this.setState({ selectedType: value });
    } else {
      this.setState({ selectedType: 0 });
    }
    console.log(value, this.state.selectedType)
  }

  displayContent() {
    this.state.displayCategories.map((value, index) => {
      index += 1;
      return <CustomRadio
        key={index}
        onClick={() => this.handleClick(index)}
        isSelected={this.state.selectedType === index}
        title={value}
      />
    })
  }

  componentDidMount() {
    axios.get(API + '/project_ranges')
      .then(res => {
        this.setState({ ...this.state, displayCategories: res.data })
      })
  }

  render() {
    return (
      <Layout>
        <NavHeader title="Produit 1 : gamme" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px 10px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentSubTitle>
            Robes de cockail Nicole (4 pièces)
          </ContentSubTitle>
          <ContentTitle>Gamme de votre produit</ContentTitle>
          <ContentSubTitle>
            Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
          </ContentSubTitle>
          <Row justify="center">
            <Col>
              <center style={{fontFamily: "Gelion Medium", padding: "40px 100px 0 100px",}}>
                {this.state.displayCategories.map((value, index) => {
                  index += 1;
                  return <CustomRadio
                    key={index}
                    onClick={() => this.handleClick(index)}
                    isSelected={this.state.selectedType === index}
                    title={value}
                  />
                })}
              </center>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default ProductType;
