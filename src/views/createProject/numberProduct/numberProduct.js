import React, { Component } from "react";
import { Layout, Row, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { ContentTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import "./numberProduct.css";
import RowNumberProduct from "../../../components/createProject/RowNumberProduct";

const { Content } = Layout;

class NumberProduct extends Component {
  state = {
    number: 1,
    data: [{ name: "", number: "" }],
  };

  changeState(index, name, number) {
    const { data } = this.state;

    data[index].name = name;
    data[index].number = number;
    this.setState({ data });
  }

  render() {
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
                if (this.state.number > 1) {
                  data.pop();
                  this.setState({ data });
                  this.setState({ number: this.state.number - 1 });
                }
              }}
            />
            <ContentTitle style={{ margin: "10px 30px" }}>
              {this.state.number}
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

                data.push({ name: "", number: "" });
                this.setState({ data });
                this.setState({ number: this.state.number + 1 });
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
                  this.changeState(index, str.currentTarget.value, e.number)
                }
                onInput2={(str) =>
                  this.changeState(index, e.name, str.currentTarget.value)
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
