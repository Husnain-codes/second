import { extendBaseTheme } from "@chakra-ui/react";

export const theme = extendBaseTheme({
  fonts: {
    heading: "'Ubuntu', sans-serif",
    body: "'Ubuntu', sans-serif",
  },
  testStyles: {
      h1:{
          fontSize: {
           base: "30px",
           md: "32px"
          },
      },
  },
  styles: {
    global: {
      body: {
        bg: "#F3F3F7",
      },
    },
  },
});
