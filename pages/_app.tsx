import React from "react";
import App from "next/app";
import { Auth0Provider } from "use-auth0-hooks";
import { theme } from "../theme/getPageContext";
import { CssBaseline } from "@material-ui/core";
import { GlobalStyle } from "../theme/globalStyle";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID}
          redirectUri={process.env.AUTH0_REDIRECT_URI}
        >
          <Component {...pageProps} />
        </Auth0Provider>
      </MuiThemeProvider>
    );
  }
}

export default MyApp;
