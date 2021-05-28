import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../../components/global";
import NavHeader from "../../../../components/createProject/NavHeader";
import { API } from '../../../../config'
import axios from 'axios'
import CustomRadio from "../../../../components/createProject/customRadio";
import { AiOutlineSearch } from 'react-icons/ai'

const { Content } = Layout;
let counting = [];
let noResult = true;
class ProductDelay extends Component {
    state = {
        matters: [],
        count: 0,
        render: ""
    }

    getData() {
        axios.get(API + '/api/matter')
        .then(res => {
            const matters = res.data
            matters.map((value) => {

                this.state.matters[value.nameMatterType] ?
                    this.setState({
                        matters: { ...this.state.matters, [value.nameMatterType]: this.state.matters[value.nameMatterType].concat([{ id: value.id, title: value.title, checked: false }]) }
                    })
                    :
                    this.setState({
                        matters: { ...this.state.matters, [value.nameMatterType]: [{ id: value.id, title: value.title, checked: false }] }
                    })
            })
        })
    }

    componentDidMount() {
      this.getData()
    }
  
  componentWillUnmount() {
      axios.post(API + '/product/'+ this.state.count + "matter").then(
          res => {
              console.log(res)
          }
      )
  }

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
                    <center className="ant-searchBarContainer">
                        <AiOutlineSearch className="ant-searchBar" />
                        <input type="text" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} className="ant-text-input" placeholder="Recherchez par nom, matières ou référence..." />
                    <span href="#" className="ant-search-link" onClick={() => {this.state.matters.length === 0 ? this.getData() : this.setState({matters : []}); counting = []}}>
                        {this.state.matters.length === 0 ? "Retour à la recherche" : "Recherche personnalisée ?"} 
                        </span>
                    </center>
                    <Row gutter={[24, 24]} style={{ paddingTop: "3rem" }}>
                        {

                            Object.entries(this.state.matters).map((matterCategory, index) => {
                                counting[matterCategory[0]] = 0
                                const render = <Col span={3} key={index}>
                                    <center>
                                        <h2 style={{ fontWeight: "bold" }}>{matterCategory[0]}</h2>
                                    </center>
                                    {matterCategory[1].map((matter, index) => {
                                        if (matter.title.toLowerCase().search(this.state.search?.toLowerCase()) !== -1 || this.state.search.length === 0) {
                                            counting[matterCategory[0]]++
                                            noResult = false
                                            return <CustomRadio
                                                onClick={() => { this.setState({ ...this.state.matters[matterCategory[0]][index].checked = !matter.checked }); matter.checked ? this.setState((prevState) => ({ count: prevState.count + 1 })) : this.setState((prevState) => ({ count: prevState.count - 1 })) }}
                                                key={index}
                                                info={matter.title}
                                                title={matter.title}
                                                isSelected={matter.checked}
                                            />
                                        }
                                        else
                                            counting.splice(matterCategory[0], 1)
                                    })}
                                </Col>
                                if (counting[matterCategory[0]] > 0) {
                                    return render
                                }
                            }
                            )
                        }
                    </Row>
                    {Object.entries(counting).map((matter, index) => {
                        if (matter[1] === 0)
                           delete counting[matter[0]]
                        }
                    )}
                    {Object.keys(counting).length === 0 &&
                        <center className="antd-no-result">
                            <h2>Aucun résultat, pas de panique ! </h2>
                            <textarea
                                placeholder="Donnez-nous des détails sur votre recherche, la matière rechercher peut ne pas avoir été enregistré dans notre base, l’intitulé peut-être différent d’un fournisseur à l’autre... (nom, référence, composition, grammage...)"
                            />
                        </center>}
                    <div className="antd-count">
                        {this.state.count.toString()} {this.state.count > 1 ? "matières selectionnées" : "matière selectionnée"}
                    </div>

                </Content>
            </Layout>
        );
    }
}

export default ProductDelay;
