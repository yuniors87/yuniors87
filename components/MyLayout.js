import Header from "./Header";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import theme from "./theme";

injectGlobal`
  @font-face {
    font-family: "Montserrat";
  }
  * {
    margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
    font-family: "Montserrat", sans-serif;
  }
  html {
    font-size: 16px;

    @media (max-width: 900px) {
      font-size: 14px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }

  }
`;

const Grid = styled.div`
  height: 100vh;
  widows: 100%;
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  grid-template-columns: 1fr minmax(360px, 1000px) 1fr;
`;

const Footer = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Header />
      <Content>{props.children}</Content>
      <Footer>
        <p>Este es el footer</p>
      </Footer>
    </Grid>
  </ThemeProvider>
);

export default Layout;
