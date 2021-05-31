import React, { Component } from "react";
import { Col, Layout, Row } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";
import CustomRadio from "../../../../components/createProject/customRadio";

const { Content } = Layout;
const index = document.location.pathname.split('/').pop();

class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDelay: 0,
            date: "",
            products: JSON.parse(localStorage.getItem("products"))
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
        console.log("index:", index)
        return (
            <Layout>
                <NavHeader title={`${this.state.products[index].name} : catégorie`} />
                <Content
                    style={{
                        margin: "0",
                        padding: "70px 100px 10px 100px",
                        minHeight: 280,
                        backgroundColor: "white",
                    }}
                >
                    <ContentSubTitle>
                    {this.state.products[index].name} ({this.state.products[index].quantity} pièces)
            </ContentSubTitle>
                    <ContentTitle>Catégorie de produit</ContentTitle>
                    <ContentSubTitle>
                        Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
          </ContentSubTitle>
                    <Row gutter={[24, 24]} style={{ paddingTop: "3rem" }}>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(1)}
                                isSelected={this.state.selectedDelay === 1}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(2)}
                                isSelected={this.state.selectedDelay === 2}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(3)}
                                isSelected={this.state.selectedDelay === 3}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(1)}
                                isSelected={this.state.selectedDelay === 1}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(2)}
                                isSelected={this.state.selectedDelay === 2}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(3)}
                                isSelected={this.state.selectedDelay === 3}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(1)}
                                isSelected={this.state.selectedDelay === 1}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(2)}
                                isSelected={this.state.selectedDelay === 2}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(3)}
                                isSelected={this.state.selectedDelay === 3}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(1)}
                                isSelected={this.state.selectedDelay === 1}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(2)}
                                isSelected={this.state.selectedDelay === 2}
                                title="Catégorie_nom"
                            />
                        </Col>
                        <Col span={3}>

                            <CustomRadio
                                onClick={() => this.handleClick(3)}
                                isSelected={this.state.selectedDelay === 3}
                                title="Catégorie_nom"
                            />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default ProductCategory;
