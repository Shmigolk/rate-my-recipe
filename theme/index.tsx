import { extendTheme } from "@mui/joy";

export const MuiJoyTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        primary: {
          50: "#F9FCF9",
          100: "#F0F9E5",
          200: "#CBEAA4",
          300: "#40C180",
          400: "#329462",
        },
      },
    },
  },
});
