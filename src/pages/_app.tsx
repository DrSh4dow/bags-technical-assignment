import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    desktop: "84.375em",
  },
  colors: {
    blackBrand: {
      900: "#010101",
      800: "#010101",
      700: "#020202",
      600: "#242424",
      500: "#464646",
      400: "#676767",
      300: "#898989",
      200: "#ABABAB",
      100: "#CCCCCC",
    },
    blueBrand: {
      100: "#66F2FF",
      200: "#44C7FF",
      300: "#2291FF",
      400: "#0051FF",
      500: "#0051FF",
      600: "#0051FF",
      700: "#0014DF",
      800: "#0F00BF",
      900: "#0F00BF",
    },
  },
  components: {
    Button: {
      variants: {
        bagsNormal: {
          bg: "blackBrand.700",
          textColor: "white",
          py: "2px",
          px: "19px",
          
        },
        bagsDesktop: {
          bg: "blueBrand.500",
          textColor: "white",
          py: "2px",
          px: "19px",
        },
      },
    },
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
