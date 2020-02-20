import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  theme => ({
    "@global": {
      ["*, *::before, *::after"]: {
        boxSizing: "border-box"
      },
      ["html, body"]: {
        height: "100%"
      },
      body: {
        textRendering: "optimizeLegibility",
        "-webkit-font-smoothing": "antialiased",
        color: theme.palette.default.main
      },
      img: {
        display: "block",
        maxWidth: "100%",
        height: "auto"
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      a: {
        textDecoration: "none",
        color: "inherit"
      },
      "#__next, main": { height: "100%" }
    }
  }),
  {
    name: "GrowthRouteCSSBaseline"
  }
);

export const GlobalStyle = props => {
  const { children = null } = props;
  useStyles();
  return <React.Fragment>{children}</React.Fragment>;
};
