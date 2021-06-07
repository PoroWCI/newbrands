import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import styled from "styled-components";
import axios from 'axios';
import { API } from '../../../config'
import "../../../assets/icons/typeIcons/css/typeicons.css";

import { connect } from 'react-redux'

const { Content } = Layout;

let typesSelection = {}
axios.defaults.headers.common['Authorization'] = localStorage.getItem("session")

class TypeProject extends Component {
  state = {
    types: [],
    typesSelection: [],
    typesAPI: []
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(API + '/api/project');
  }

  async componentDidMount() {
    await axios.get(API + '/api/type')
      .then(res => {
        const types = res.data
        this.setState({ types })
      })
  }

  async componentDidUpdate() {
    if (this.props.projectId)
    await axios.get(`${API}/api/project/${this.props.projectId}`).then((res) => {
      if (res.data.project[0].type)
      this.setState({ typesAPI: res.data.project[0].type, typesSelection: res.data.project[0].type })
    }).catch((error) => console.log(error, this.props.projectId) )
  }

  componentWillUnmount() {
    axios.post(`${API}/api/project/${this.props.projectId}/type`, this.state).then((result) => {
      axios.get(`${API}/api/workflowtype/${this.props.projectId}`).then((result) => {
        this.props.dispatch({
          type: "updateWorkflow",
          payload: result.data.workflow
        })
      }).catch((err) => console.log(err))
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
        return type.id !== e.target.value
      }
      )
      this.setState({ typesSelection: typesSelection })
    }
  }
  render() {
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
                {this.state.types.map((value, index) => {
                  let isChecked = []
                  this.state.typesAPI.some((type, i) => {
                    if (type.id === value.id) {
                      isChecked[index] = true;
                      return true;
                    }
                    else
                      isChecked[index] = false
                    return false
                  })
                  return (
                    <Col span={6} key={index} className="card-checkbox-col">
                      <input type="checkbox" className="card-checkbox" value={value.id} defaultChecked={isChecked[index]} onChange={(e) => this.handleCheckboxes(e, index)} />
                      <BoxType style={{ borderColor: this.state[value.name] ? "#00798C" : "black" }}>
                        <BoxIcon className={`icon-${value.name.toLowerCase()}-icon`} style={{ color: this.state[value.name] ? "#00798C" : "black" }} />
                        <h3 style={{ color: this.state[value.name] ? "#00798C" : "black" }}>{value.name}</h3>
                        <BoxDesc style={{ fontFamily: this.state[value.name] ? "Gelion" : "Gelion Light" }}>
                          {value.content}
                        </BoxDesc>
                      </BoxType>
                    </Col>
                  )
                })}
              </Row>
            </form>
          </center>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectId: state.projectId
  }
}

export default connect(mapStateToProps, null)(TypeProject)

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
