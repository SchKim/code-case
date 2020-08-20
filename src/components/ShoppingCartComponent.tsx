import React from "react";
import { IProduct } from "../shared/IProduct";

interface IShoppingCartComponentProps {
  basket: IProduct[];
}

export default class ShoppingCartComponent extends React.Component<
  IShoppingCartComponentProps
> {
  constructor(props: IShoppingCartComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>
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
        </div>
      );
    });
  }
}
