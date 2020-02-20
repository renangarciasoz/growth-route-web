import {
  Palette as oldPalette,
  PaletteOptions as oldPaletteOptions
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface ColorPalette {
    main: string;
    pale?: string;
    10?: string;
    20: string;
    30?: string;
    40: string;
    50?: string;
    60: string;
    70?: string;
    80: string;
    90?: string;
    100: string;
  }

  interface Palette extends oldPalette {
    orange: ColorPalette;
    blue: ColorPalette;
    bluishBlack: ColorPalette;
    purple: ColorPalette;
    green: ColorPalette;
    yellow: ColorPalette;
    white: string;
    neutral: any;
  }

  interface PaletteOptions extends oldPaletteOptions {
    pale?: string;
  }
}
