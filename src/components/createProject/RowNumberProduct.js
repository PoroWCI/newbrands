import React, { Component } from "react";
import { Row, Col } from "antd";
import { createMuiTheme } from "@material-ui/core/styles";
import { TextField, ThemeProvider } from "@material-ui/core";
import { CustomLabelInput } from "../global";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#00798C",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

class RowNumberProduct extends Component {
  render() {
    return (
      <Row gutter={24} justify="center" style={{ margin: "15px 0" }}>
        <Col span={12}>
          <ThemeProvider theme={theme}>
            <TextField
              fullWidth
              id="filled-secondary"
              label={<CustomLabelInput>Nom du produit</CustomLabelInput>}
              variant="outlined"
              color="primary"
              onChange={this.props.onInput1}
            />
          </ThemeProvider>
        </Col>
        <Col span={8}>
          <ThemeProvider theme={theme}>
            <TextField
              type="number"
              min="1"
              max="999"
              fullWidth
              id="filled-secondary"
              label={<CustomLabelInput>Nombre de pièces</CustomLabelInput>}
              variant="outlined"
              color="primary"
              onChange={this.props.onInput2}
            />
          </ThemeProvider>
        </Col>
        <Col span={8}>
          <ThemeProvider theme={theme}>
            <TextField
              type="text"
              fullWidth
              id="filled-secondary"
              label={<CustomLabelInput>Taille</CustomLabelInput>}
              variant="outlined"
              color="primary"
              onChange={this.props.onInput3}
            />
          </ThemeProvider>
        </Col>
      </Row>
    );
  }
}

export default RowNumberProduct;
