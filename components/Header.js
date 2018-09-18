import Link from "next/link";
import styled from "styled-components";

const Head = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  background: ${props => {
    return props.theme.colors.primary;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled.a`
  color: ${props => {
    return props.theme.colors.secondary;
  }};
  font-size:  ${props => {
    return props.theme.fontSize.lg;
  }};
  cursor: pointer;
  font-weight: bold;
  margin-right: 15px;
  :hover {
    ${props => {
    return props.theme.colors.darken;
  }};
  }
`;

const Header = () => (
  <Head>
    <Link href="/">
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/about">
      <StyledLink>About</StyledLink>
    </Link>
  </Head>
);

export default Header;
