import styled from "styled-components";

const Item = styled.h1`
  color: ${props => {
    return props.theme.colors.primary;
  }};
  font-size: ${props => {
    return props.theme.fontSize.xl;
  }};
  font-weight: bold;
  text-transform: uppercase;
`;

const Title = props => <Item>{props.name}</Item>;

export default Title;
