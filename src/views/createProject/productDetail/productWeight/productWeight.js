import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";

import CustomRadio from "../../../../components/createProject/customRadio";
import CustomRadioInput from "../../../../components/createProject/customRadioInput";
import CustomTextField from "../../../../components/createProject/customTextField";

const { Content } = Layout;

class ProductWeight extends Component {
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
                <NavHeader title="Produit 1 : grammage" />
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
                    <ContentTitle>Grammages souhaitées</ContentTitle>
                    <ContentSubTitle>
                        Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
          </ContentSubTitle>
                    <center>
                        <Row gutter={[24, 24]} style={{ paddingTop: "3rem" }} justify="center">
                            <Col span={12}>
                                <CustomTextField
                                    disabled={true}
                                    label="Nom_matiere_X"
                                    required={false}
                                />
                            </Col>
                            <Col span={6}>
                                <CustomTextField
                                    onInput={(e) => this.setState({ name: e.target.value })}
                                    label="(g/m2)"
                                />
                            </Col>
                        </Row>
                        <Row gutter={[24, 24]} style={{ paddingTop: "3rem" }} justify="center" >
                            <Col span={12}>
                                <CustomTextField
                                   disabled={true}
                                   required={false}
                                    label="Nom_matiere_X"
                                />
                            </Col>
                            <Col span={6}>
                                <CustomTextField
                                    onInput={(e) => this.setState({ name: e.target.value })}
                                    label="(g/m2)"
                                />
                            </Col>
                        </Row>
                        <Row gutter={[24, 24]} style={{ paddingTop: "3rem" }} justify="center">
                            <Col span={12}>
                                <CustomTextField
                                    disabled={true}
                                    required={false}
                                    label="Nom_matiere_X"
                                />
                            </Col>
                            <Col span={6}>
                                <CustomTextField
                                    onInput={(e) => this.setState({ name: e.target.value })}
                                    label="(g/m2)"
                                />
                            </Col>
                        </Row>
                    </center>
                </Content>
            </Layout>
        );
    }
}

export default ProductWeight;
