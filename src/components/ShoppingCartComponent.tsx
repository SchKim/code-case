import React from "react";
import { IProduct } from "../shared/IProduct";
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: b2d7ee;
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

interface IShoppingCartComponentProps {
  basket: IProduct[];
  renderMainComponent: () => void;
  removeProduct: (productId: number) => void;
}

export default class ShoppingCartComponent extends React.Component<IShoppingCartComponentProps> {
  render() {
    return (
      <div>
        {/* bij onClick wordt MainComponent geladen */}
        <Button onClick={this.props.renderMainComponent}>Terug naar producten</Button>
        <h1>ShoppingCartComponent</h1>
        {this.renderBasket()}
      </div>
    );
  }

  renderBasket() {
    return this.props.basket.map(product => {
      return (
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description} </p>
            <p>{product.price}</p>
            {/* bij onClick wordt het geselecteerde product verwijderd */}
            <Button onClick={() => this.props.removeProduct(product.id)}>Verwijder product</Button>
        </div>
      );
    });
  }
}
