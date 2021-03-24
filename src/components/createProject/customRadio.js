import React, { Component } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { CheckCircleFilled } from "@ant-design/icons";

class CustomRadio extends Component {
  render() {
    const { isSelected } = this.props;
    return (
      <CustomRadioBtn
        onClick={this.props.onClick}
        style={{
          borderColor: isSelected ? "#00798C" : "#dddddd",
          color: isSelected ? "#00798C" : "#000",
        }}
      >
        <Row type="flex" align="middle" gutter={24}>
          <Col>
            <CheckCircleFilled
              style={{
                color: isSelected ? "#00798C" : "transparent",
                fontSize: "29px",
                border: isSelected ? "1px solid #fff" : "1px solid #dddddd",
                marginTop: "7px",
                borderRadius: "500px",
              }}
            />
          </Col>
          <Col>{this.props.title}</Col>
        </Row>
      </CustomRadioBtn>
    );
  }
}

export default CustomRadio;

const CustomRadioBtn = styled.button`
  margin: 5px 0;
  font-size: 24px;
  text-align: left;
  padding: 0px 50px;
  height: 80px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #dddddd;
  cursor: pointer;

  &:hover {
    border-color: #00798c !important;
    color: #00798c !important;
    transition: all ease-out 0.2s !important;
  }
`;
