import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";
import CustomTextField from "../../../../components/createProject/customTextField";


import { connect } from 'react-redux'

const { Content } = Layout;
let index = document.location.pathname.split('/').pop();

class ProductWeight extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { products: this.props.products }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                selectedDelay: 0,
                date: "",
                products: this.props.products
            })
        }, 200)
        index = document.location.pathname.split('/').pop();
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
                <NavHeader title={`${this.state.products[index]?.name} : grammage`} />
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
                    <ContentTitle>Grammages souhaitées</ContentTitle>
                    <ContentSubTitle>
                        Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
          </ContentSubTitle>
                    <center>
                        <Row gutter={[24, 24]} style={{ paddingTop: "1rem" }} justify="center">
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
                        <Row gutter={[24, 24]} style={{ paddingTop: "1rem" }} justify="center" >
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
                        <Row gutter={[24, 24]} style={{ paddingTop: "1rem" }} justify="center">
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

const mapStateToProps = (state) => {
    return {
        projectId: state.projectId,
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductWeight)
