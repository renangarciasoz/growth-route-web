import { Theme } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    boxShadow: {
      s: string;
      m: string;
    };
    Spacing: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    Shape: {
      borderRadiusLarge: string;
      borderRadiusPill: string;
    };
  }
}
