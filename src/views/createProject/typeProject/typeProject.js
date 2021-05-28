import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import styled from "styled-components";
import axios from 'axios';
import { API } from '../../../config'
import "../../../assets/icons/typeIcons/css/typeicons.css";

const { Content } = Layout;

// types : {id: blabla, id: blablou}
// types : {blabla: true, blablou: false}

let typesSelection = {}
axios.defaults.headers.common['Authorization'] = localStorage.getItem("session")

class TypeProject extends Component {
  state = {
    types: [],
    typesSelection: []
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(API + '/api/project').then((result) => {
      console.log("posted!:", result)
    });
  }

  async componentDidMount() {
    // console.log(localStorage.getItem("session"))
    if (!localStorage.getItem("projectId")) {
      await axios.post(API + '/api/project').then((result) => {
        localStorage.setItem("projectId", result.data.idProject)
        // console.log("posted!:", result)
      });
    }
    await axios.get(API + '/api/type')
      .then(res => {
        const types = res.data
        this.setState({ types })
      })
    // localStorage.setItem("projectId", "4b7bf1f9-bd22-11eb-9a36-0050b6027878")
  }

  async componentWillUnmount() {
    await axios.post(`${API}/api/project/${localStorage.getItem("projectId")}/type`, this.state).then((result) => {
      console.log("types:", this.state)
      return result
    })
    await axios.get(`${API}/api/workflowtype/${localStorage.getItem("projectId")}`).then((result) => {
      localStorage.setItem("workflow", JSON.stringify(result.data.workflow))
      this.setState({worflow: JSON.stringify(result.data.workflow)})
      console.log(localStorage)
      return result
      // await axios.get(`${API}/api/workflowtype/4b7bf1f9-bd22-11eb-9a36-0050b6027878`).then((result) => {
      //   console.log(localStorage)
      //   return result
    })
  }


  handleCheckboxes(e, index) {
    if (e.target.checked === true) {
      if (this.state.typesSelection.length > 0)
        this.setState({ typesSelection: this.state.typesSelection.concat({ id: e.target.value }) })
      else
        this.setState({ typesSelection: [{ id: e.target.value }] })
    }
    else {
      typesSelection = this.state.typesSelection.filter(type => {
        //  console.log(type.id, e.target.value)
        return type.id !== e.target.value
      }
      )
      this.setState({ typesSelection: typesSelection })
    }
  }

  render() {
    console.log(this.state)
    // console.log(typesSelection)
    return (
      <Layout>
        <NavHeader title="Produits" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px 35px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>
            Ici le système de renseignement des produits
          </ContentTitle>
          <ContentSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ContentSubTitle>
          <center
            style={{
              marginTop: "50px",
              marginBottom: "0",
              fontFamily: "Gelion Medium",
              fontSize: "24px",
            }}
          >
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <Row>
                {this.state.types.map((value, index) =>
                  <Col span={6} key={index} className="card-checkbox-col">
                    <input type="checkbox" className="card-checkbox" value={value.id} onChange={(e) => this.handleCheckboxes(e, index)} />
                    <BoxType style={{ borderColor: this.state[value.name] ? "#00798C" : "black" }}>
                      <BoxIcon className={`icon-${value.name.toLowerCase()}-icon`} style={{ color: this.state[value.name] ? "#00798C" : "black" }} />
                      <h3 style={{ color: this.state[value.name] ? "#00798C" : "black" }}>{value.name}</h3>
                      <BoxDesc style={{ fontFamily: this.state[value.name] ? "Gelion" : "Gelion Light" }}>
                        {value.content}
                      </BoxDesc>
                    </BoxType>
                  </Col>
                )}
              </Row>
            </form>
          </center>
        </Content>
      </Layout>
    );
  }
}

export default TypeProject;

const BoxIcon = styled.i`
  font-size: 50px;
  color: black;
  margin-bottom: 10px;
  font-family: "typeicons";
`;

const BoxDesc = styled.p`
  font-size: 16px;
  font-family: Gelion;
  color: black;
`;

const BoxType = styled.div`
  padding: 10px 10px;
  margin: 10px;
  border: 1px solid #dddddd;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
