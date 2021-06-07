import React, { Component } from "react";
import { Col, Layout, Row } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";
import CustomRadio from "../../../../components/createProject/customRadio";
import axios from "axios";
import { API } from "../../../../config";
import { connect } from 'react-redux'

const { Content } = Layout;
let index = document.location.pathname.split('/').pop();

class ProductCategory extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.products)
        this.state = {
            selectedDelay: 0,
            date: "",
            products: this.props.products
        };
        // console.log(this.state)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        if (this.state.categories)
            if (this.state.categories[index])
                this.setState({ categories: { ...this.state.categories, [index]: false } })
            else
                this.setState({ categories: { ...this.state.categories, [index]: true } })
        else
            this.setState({ categories: { [index]: true } })
        console.log(this.state)
    }

     componentDidMount() {
         index = document.location.pathname.split('/').pop();
         axios.get(`${API}/api/category`)
            .then(res => {
                    this.setState({ displayCategories: res.data })
            })

    }

    render() {
        return (
            <Layout>
                <NavHeader title={`${this.state.products[index]?.name} : catégorie`} />
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
                    <ContentTitle>Catégorie de produit</ContentTitle>
                    <ContentSubTitle>
                        Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
          </ContentSubTitle>
                    <Row gutter={[24, 24]} style={{ paddingTop: "3rem" }}>
                        {this.state.displayCategories?.map((category, index) => {
                            // console.log(this.state)
                            return (
                                <Col span={3} key={index}>
                                    <CustomRadio
                                        key={this.state.displayCategories[0].id}
                                        title={category.name}
                                        onClick={() => this.handleClick(index)}
                                        isSelected={this.state.categories && this.state.categories[index]}
                                    />
                                </Col>)
                        })}
                    </Row>
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
  
  export default connect(mapStateToProps, null)(ProductCategory)