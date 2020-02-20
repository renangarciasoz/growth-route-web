import React from "react";
import App from "next/app";
import { GlobalStyle } from "../theme/globalStyle";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme/getPageContext";
import { CssBaseline } from "@material-ui/core";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    );
  }
}

export default MyApp;
