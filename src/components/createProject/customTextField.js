import React, { Component } from "react";
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

class CustomTextField extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TextField
          fullWidth
          id="filled-secondary"
          label={<CustomLabelInput>{this.props.label}</CustomLabelInput>}
          variant="outlined"
          color="primary"
          onInput={this.props.onInput}
          multiline={this.props.multiline}
          rows={this.props.rows}
          type={this.props.type}
          pattern={this.props.pattern}
          required={this.props.required}
          disabled={this.props.disabled}
        />
      </ThemeProvider>
    );
  }
}

export default CustomTextField;
