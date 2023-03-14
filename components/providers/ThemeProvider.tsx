import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { PropsWithChildren, useMemo, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export type ThemeProviderProps = PropsWithChildren<{}>;

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          ...inter.style,
          h3: {
            fontWeight: "800",
          },
          h5: {
            fontWeight: "800",
          },
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
