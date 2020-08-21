import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: red;
  font-size: 16px;
  border-radius: 3px;
  color:  #000;
  border: 2px solid #b2d7ee;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: #ddeff8;
    color: #000;
  }
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
      <div>
        <h1>HeaderComponent</h1>
        {/* bij onClick wordt ShoppingCartComponent geladen */}
        <p onClick={this.props.renderShoppingCartComponent}>icon</p>
        <p>Totaal producten: {this.props.totalProducts}</p>
        <p>Totaal prijs: {this.props.totalPrice}</p>
        {/* bij onClick wort het winkelmand geleegd */}
        <Button onClick={this.props.emptySelectedProducts}>Winkelmand legen</Button>
      </div>
    );
  }
}
