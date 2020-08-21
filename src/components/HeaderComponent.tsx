import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: #e6e6e6;
  font-size: 16px;
  border-radius: 3px;
  color:  #000;
  border: 2px solid #000;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
`;
const Header = styled.header`
 
  background: #b2d7ee;
  font-size: 16px;
  border-radius: 3px;
  padding: 0.25em 1em;
  width: 100%;

`;


interface IHeaderComponentProps {
  totalProducts: number;
  totalPrice: number;
  renderShoppingCartComponent: () => void;
  emptySelectedProducts: () => void;
}

export default class HeaderComponent extends React.Component<IHeaderComponentProps> { 

  render() {
    return (
      <Header>
        <h1>HeaderComponent</h1>
        {/* bij onClick wordt ShoppingCartComponent geladen */}
        <p onClick={this.props.renderShoppingCartComponent}>icon</p>
        <p>Totaal producten: {this.props.totalProducts}</p>
        <p>Totaal prijs: {this.props.totalPrice}</p>
        {/* bij onClick wort het winkelmand geleegd */}
        <Button onClick={this.props.emptySelectedProducts}>Winkelmand legen</Button>
        </Header>
    );
  }
}
