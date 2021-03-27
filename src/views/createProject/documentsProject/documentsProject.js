import React, { Component } from "react";
import { Layout, Row, Upload, message } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import { ContentTitle, ContentSubTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";

const { Content } = Layout;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} a été ajouté avec succès.`);
    } else if (status === "error") {
      message.error(`L'ajout de ${info.file.name} a échoué.`);
    }
  },
};

class DocumentsProject extends Component {
  render() {
    return (
      <Layout>
        <NavHeader title="Photo et documents" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>Ajoutez quelques documents à votre projet</ContentTitle>
          <ContentSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </ContentSubTitle>
          <center
            style={{
              padding: "100px 0",
              fontFamily: "Gelion Medium",
              fontSize: "24px",
            }}
          >
            <Row justify="center">
              <Dragger
                {...props}
                style={{
                  backgroundColor: "white",
                  margin: "0",
                  padding: "20px 50px",
                  height: "200px",
                  minHeight: "200px",
                  maxHeight: "200px",
                }}
              >
                <p className="ant-upload-drag-icon">
                  <PlusCircleFilled style={{ color: "#00798C" }} />
                </p>
                <p
                  className="ant-upload-text"
                  style={{ fontFamily: "Gelion" }}
                >
                  Faites glisser-déposer vos documents ou parcourez vos fichiers
                </p>
              </Dragger>
            </Row>
          </center>
        </Content>
      </Layout>
    );
  }
}

export default DocumentsProject;
