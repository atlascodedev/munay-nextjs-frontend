import {
  createMuiTheme,
  Theme,
  PaletteColorOptions,
  ThemeOptions,
  SimplePaletteColorOptions,
} from "@material-ui/core";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004B51",
      light: "#134F54",
      dark: "#033336",
      contrastText: "#fff",
    },

    secondary: {
      main: "#FFAB40",
      light: "#FFDD71",
      dark: "#C77C02",
      contrastText: "#333",
    },
  },

  typography: {
    fontFamily: "Roboto",
  },
});

export default theme;

export const styledTheme: Pick<
  ThemeOptions,
  "palette" | "spacing" | "zIndex" | "breakpoints" | "typography"
> = {
  palette: {
    primary: {
      main: "#004B51",
      light: "#134F54",
      dark: "#033336",
      contrastText: "#fff",
    },

    secondary: {
      main: "#FFAB40",
      light: "#FFDD71",
      dark: "#C77C02",
      contrastText: "#333",
    },
  },

  typography: {
    fontFamily: "Roboto",
  },
};
