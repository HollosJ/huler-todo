import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../Theming/theme";
import { Reset } from "styled-reset";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.colors.grey2};
    font-family: ${(props) => props.theme.fonts.primary}, sans-serif !important;
    color: ${(props) => props.theme.colors.text};
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
