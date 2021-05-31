import React, { Component } from "react";
import { Layout, Row, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { ContentTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import "./numberProduct.css";
import RowNumberProduct from "../../../components/createProject/RowNumberProduct";
import axios from "axios";
import { API } from "../../../config";
import { createNoSubstitutionTemplateLiteral } from "typescript";

const { Content } = Layout;

class NumberProduct extends Component {
  state = {
    quantity: 1,
    data: [{ name: "", quantity: "", size: "" }],
  };

  // componentDidMount() {
  //   await axios.get(`${API}/api/project/${localStorage.getItem("projectId")}`).then((result) => {
  //     setProducts(result.data.project[0].product)
  //     console.log(result.data)
  //   })
  // }

  componentWillUnmount() {
    const req = {productSelection : this.state.data}
    console.log(req)
    axios.post(`${API}/api/project/${localStorage.getItem("projectId")}/product`, req).then(
        res => {
            console.log(res)
        }
    )
}

  changeState(index, name, quantity, size) {
    const { data } = this.state;

    data[index].name = name;
    data[index].quantity = quantity;
    data[index].size = size;
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    console.log(this.state.data)
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
                }
                onInput2={(str) =>
                  this.changeState(index, e.name, str.currentTarget.value, e.size)
                }
                onInput3={(str) =>
                  this.changeState(index, e.name, e.quantity, str.currentTarget.value)
                }
              />
            ))}

            {/* <Button onClick={() => console.log(data)}>VIEW</Button> */}
          </center>
        </Content>
      </Layout>
    );
  }
}

export default NumberProduct;
