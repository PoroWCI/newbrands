import React, { Component } from "react";
import { Layout, Row, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { ContentTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import "./numberProduct.css";
import RowNumberProduct from "../../../components/createProject/RowNumberProduct";
import axios from "axios";
import { API } from "../../../config";

import { connect } from 'react-redux'

const { Content } = Layout;

class NumberProduct extends Component {
  state = {
    quantity: 1,
    data: [{ name: "", quantity: "", size: "" }],
  };

  async componentDidMount() {
    // if (this.props.products?.length > 0)
    await axios.get(`${API}/api/project/${this.props.projectId}`).then((result) => {
      if (result.data.project[0]?.product?.length > 0)
        result.data.project[0].product.map((prod, i) => {
          let data = []
          if (i === 0)
            data = [{ name: prod.name, quantity: prod.quantity, size: prod.size }]
          else
            data.push([{ name: prod.product[i].name, quantity: prod.product[i].quantity, size: prod.product[i].size }])

          this.setState({ data });
          this.setState({ quantity: result.data.project[0].product.length })
          return false
        })
    })
  }

  componentWillUnmount() {
    const req = { productSelection: this.state.data }
    
    if (this.state.data.length > 0)
    {
      axios.post(`${API}/api/project/${this.props.projectId}/product`, req).then(() => {
        console.log(this.state.data)
        this.props.dispatch({
          type: "updateProducts",
          payload: this.state.data
        })
      })
    }
  }

  changeState(index, name, quantity, size) {
    const { data } = this.state;

    data[index].name = name;
    data[index].quantity = quantity;
    data[index].size = size;
    this.setState({ data });
  }

  render() {
    // console.log("products", this.props.products)
    const { data } = this.state;
    return (
      <Layout>
        <NavHeader title="Noms et nombre de produit" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>
            Combien de produits souhaitez-vous créer ?
          </ContentTitle>
          <Row justify="center" align="middle">
            <Button
              style={{
                backgroundColor: "#00798C",
                color: "white",
                outline: "none",
                border: "none",
                boxShadow: "0 0 0 0 red",
              }}
              shape="circle"
              icon={<MinusOutlined />}
              size="large"
              onClick={() => {
                const { data } = this.state;
                if (this.state.quantity > 1) {
                  data.pop();
                  this.setState({ data });
                  this.setState({ quantity: this.state.quantity - 1 });
                }
              }}
            />
            <ContentTitle style={{ margin: "10px 30px" }}>
              {this.state.quantity}
            </ContentTitle>

            <Button
              style={{
                backgroundColor: "#00798C",
                color: "white",
                outline: "none",
                border: "none",
              }}
              shape="circle"
              icon={<PlusOutlined />}
              size="large"
              onClick={() => {
                const { data } = this.state;

                data.push({ name: "", quantity: "", size: "" });
                this.setState({ data });
                this.setState({ quantity: this.state.quantity + 1 });
              }}
            />
          </Row>
          <center
            style={{
              padding: "100px 0",
              fontFamily: "Gelion Medium",
              fontSize: "24px",
            }}
          >
            {data.map((e, index) => (
              <RowNumberProduct key={index}
                onInput1={(str) =>
                  this.changeState(index, str.currentTarget.value, e.quantity, e.size)
                } defaultValue1={this.state.data[index].name}
                onInput2={(str) =>
                  this.changeState(index, e.name, str.currentTarget.value, e.size)
                } defaultValue2={this.state.data[index].quantity}
                onInput3={(str) =>
                  this.changeState(index, e.name, e.quantity, str.currentTarget.value)
                } defaultValue3={this.state.data[index].size}
              />
            ))}
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

export default connect(mapStateToProps, null)(NumberProduct)
