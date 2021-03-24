import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { ContentTitle, ContentSubTitle } from "../../../components/global";
import NavHeader from "../../../components/createProject/NavHeader";
import CustomTextField from "../../../components/createProject/customTextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const { Content } = Layout;

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      tel: "",
      company: "",
      fonction: "",
      siretDuns: "",
      pays: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if (this.state.selectedBudget !== value) {
      this.setState({ selectedBudget: value });
    } else {
      this.setState({ selectedBudget: "" });
    }
  }

  render() {
    const { pays } = this.state;
    return (
      <Layout>
        <NavHeader title="Budget (facultatif)" />
        <Content
          style={{
            margin: "0",
            padding: "70px 100px 20px 100px",
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <ContentTitle>Quel est votre budget ?</ContentTitle>
          <ContentSubTitle>
            Merci de nous transmettre vos coordonnées afin de vous recontacter
          </ContentSubTitle>
          <center
            style={{
              padding: "40px 100px 0 100px",
              fontFamily: "Gelion Medium",
              fontSize: "24px",
            }}
          >
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <CustomTextField
                  onInput={(e) => this.setState({ name: e.target.value })}
                  label="Prénom"
                />
              </Col>
              <Col span={12}>
                <CustomTextField
                  onInput={(e) => this.setState({ surname: e.target.value })}
                  label="Nom"
                />
              </Col>
              <Col span={12}>
                <CustomTextField
                  onInput={(e) => this.setState({ email: e.target.value })}
                  label="Email professionnel"
                />
              </Col>
              <Col span={12}>
                <CustomTextField
                  onInput={(e) => this.setState({ tel: e.target.value })}
                  label="Numéro de téléphone"
                  type="tel"
                  pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}|[0-9]{10}"
                />
              </Col>
              <Col span={12}>
                <CustomTextField
                  onInput={(e) => this.setState({ company: e.target.value })}
                  label="Société"
                />
              </Col>
              <Col span={12}>
                <CustomTextField
                  onInput={(e) => this.setState({ fonction: e.target.value })}
                  label="Fonction"
                />
              </Col>
              <Col span={12}>
                <CustomTextField
                  onInput={(e) => this.setState({ siretDuns: e.target.value })}
                  label="SIRET / DUNS"
                />
              </Col>
              <Col span={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{
                      fontFamily: "Georgia",
                      color: "black",
                      fontSize: "18px",
                      textAlign: "left",
                    }}
                  >
                    Pays
                  </InputLabel>
                  <Select
                    value={pays}
                    onChange={(e) => this.setState({ pays: e.target.value })}
                    label="Age"
                    fullWidth
                    style={{ textAlign: "left", backgroundColor: "white" }}
                  >
                    <MenuItem value="allemagne">Allemagne</MenuItem>
                    <MenuItem value="uk">Angleterre</MenuItem>
                    <MenuItem value="belgique">Belgique</MenuItem>
                    <MenuItem value="france">France</MenuItem>
                  </Select>
                </FormControl>
              </Col>
            </Row>
            {/* <button
              onClick={() =>
                console.log(
                  name,
                  surname,
                  email,
                  tel,
                  fonction,
                  pays,
                  company,
                  siretDuns
                )
              }
            >
              VIEW
            </button> */}
          </center>
        </Content>
      </Layout>
    );
  }
}

export default UserInfo;
