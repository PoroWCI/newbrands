import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";

import CustomRadio from "../../../../components/createProject/customRadio";

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
                <NavHeader title="Produit 1 : matière" />
                <Content
                    style={{
                        margin: "0",
                        padding: "70px 100px 10px 100px",
                        minHeight: 280,
                        backgroundColor: "white",
                    }}
                >
                    <ContentSubTitle>
                    Robes de cockail Nicole (4 pièces)   </ContentSubTitle>
                    <ContentTitle>Matières souhaitées</ContentTitle>
                    <ContentSubTitle>
                        Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
          </ContentSubTitle>

                    <Row gutter={[24, 24]} style={{paddingTop: "3rem"}}>
                        <Col span={3}>
                            <center>
                                <h2 style={{ fontWeight: "bold" }}>Synthétique</h2>
                            </center>
                            <CustomRadio
                                onClick={() => this.handleClick(1)}
                                isSelected={this.state.selectedDelay === 1}
                                title="Nom_matière_X"
                            />
                        </Col>
                        <Col span={3}>
                            <center>
                                <h2 style={{ fontWeight: "bold" }}>Végétale</h2>
                            </center>
                            <CustomRadio
                                onClick={() => this.handleClick(2)}
                                isSelected={this.state.selectedDelay === 2}
                                title="Nom_matière_X"
                            />
                        </Col>
                        <Col span={3}>
                            <center>
                                <h2 style={{ fontWeight: "bold" }}>Recyclé</h2>
                            </center>
                            <CustomRadio
                                onClick={() => this.handleClick(3)}
                                isSelected={this.state.selectedDelay === 3}
                                title="Nom_matière_X"
                            />
                        </Col>
                    </Row>

                </Content>
            </Layout>
        );
    }
}

export default ProductDelay;
