import React, { Component } from "react";
import { Col, Layout, Row } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";
import CustomRadio from "../../../../components/createProject/customRadio";

import { API } from '../../../../config'
import axios from 'axios'

import { connect } from 'react-redux'

const { Content } = Layout;
let index = document.location.pathname.split('/').pop();

class ProductType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 0,
      date: "",
      displayGammes: [],
      products: this.props.products
    };
  }

  handleClick(index, e) {
    e.preventDefault()
    if (this.state.categories)
      if (this.state.categories[index])
        this.setState({ categories: { ...this.state.categories, [index]: false } })
      else
        this.setState({ categories: { ...this.state.categories, [index]: true } })
    else
      this.setState({ categories: { [index]: true } })
    console.log(this.state)
  }

  displayContent() {
    this.state.displayGammes.map((value, index) => {
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
    axios.get(`${API}/api/gamme`)
      .then(res => {
        index = document.location.pathname.split('/').pop();
        setTimeout(() => {
          this.setState({ displayGammes: res.data })
        }, 200)
        console.log(res.data)
      })
  }

  componentDidUpdate () {
    index = document.location.pathname.split('/').pop();
  }

  render() {
    return (
      <Layout>
        <NavHeader title={`${this.state.products[index]?.name} : gamme`} />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px 10px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentSubTitle>
            {this.state.products[index]?.name} ({this.state.products[index]?.quantity} pièces)
          </ContentSubTitle>
          <ContentTitle>Gamme de votre produit</ContentTitle>
          <ContentSubTitle>
            Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
          </ContentSubTitle>
          <center
            style={{
              fontFamily: "Gelion Medium",
              padding: "40px 100px 0 100px",
            }}
          >
            {this.state.displayGammes?.map((gamme, index) => {
              return (
                <CustomRadio
                  key={this.state.displayGammes[index].id}
                  title={gamme.title}
                  onClick={(e) => this.handleClick(index, e)}
                  isSelected={this.state.categories && this.state.categories[index]}
                />)
            })}
          </center>
        </Content>
      </Layout>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    projectId: state.projectId,
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductType)
