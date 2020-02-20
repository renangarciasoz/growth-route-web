import { createMuiTheme } from "@material-ui/core/styles";

const greenMain = "#59FFEE";
const redMain = "#FF7777";
const grey = "#D0DBE4";
const bluishBlack = "#191F23";
const white = "#fff";
const black = "#000";
const primaryColor = "#1BB3A3";
const secondaryColor = "#FFFFFF";
const defaultColor = "#AFB2AD";

/* Begin of Palettes description */

const bluishBlackPalette = {
  main: bluishBlack,
  10: "#F3F7FA",
  20: "#E1E9EF",
  30: "#D0DBE4",
  40: "#B7C8D5",
  50: "#9FB4C2",
  60: "#879DAC",
  70: "#6E8391",
  80: "#536470",
  90: "#36424B",
  100: "#191F23"
};

const greenPalette = {
  main: greenMain,
  20: "#E3FFEB",
  40: "#79EA98"
};

const redPalette = {
  main: redMain
};
/* End of Palettes description */

export const theme = createMuiTheme({
  palette: {
    common: {
      green: greenPalette.main,
      red: redPalette.main,
      success: greenPalette.main,
      grey,
      white,
      black,
      greyDark: bluishBlackPalette[50],
      greyLight: bluishBlackPalette[10]
    },
    primary: {
      main: primaryColor
    },
    secondary: { main: secondaryColor },
    default: {
      main: defaultColor
    },
    logo: {
      primary: primaryColor,
      secondary: bluishBlack,
      tertiary: white
    },
    text: {
      primary: defaultColor,
      secondary: secondaryColor,
      error: redMain,
    },
    red: redPalette,
    background: {
      default: "#212121",
      secondary: "#303030",
      tertiary: "#02011D"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    fontSize: 16,
    color: defaultColor
  },
  shape: {
    sidebarWidth: 243,
    borderRadius: 5,
    headerHeight: 64,
    container: 1140
  },
  zIndex: {
    header: 5,
    overlay: 4
  },
  loadingSpinner: {
    big: 60
  },
});
