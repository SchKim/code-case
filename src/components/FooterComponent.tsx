import React from "react";
import styled from 'styled-components';

const Footer = styled.footer`
 
  background: #b2d7ee;
  font-size: 16px;
  border-radius: 3px;
  padding: 0.25em 1em;
  width: 100%;

`;



interface IFooterComponentProps {}



export default class FooterComponent extends React.Component<
  IFooterComponentProps
> {
  render() {
    return (
      <Footer>
        <h1>FooterComponent</h1>
        </Footer>
    );
  }
}
