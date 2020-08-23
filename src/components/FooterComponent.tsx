import React from "react";
import styled from "styled-components";

interface IFooterComponentProps {}

export default class FooterComponent extends React.Component<IFooterComponentProps> {
  render() {
    return (
      <Footer>
        <p>Doei doei ;-)</p>
      </Footer>
    );
  }
}


const Footer = styled.footer`
  background: #b2d7ee;
  font-size: 16px;
  border-radius: 3px;
  padding: 0.25em 1em;
  width: 100%;
`;