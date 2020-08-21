import React from "react";
import { IProduct } from "../shared/IProduct";

interface IShoppingCartComponentProps {
  basket: IProduct[];
  renderMainComponent: () => void;
  removeProduct: (productId: number) => void;
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
        {/* bij onClick wordt MainComponent geladen */}
        <button onClick={this.props.renderMainComponent}>Terug naar producten</button>
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
            <button onClick={() => this.props.removeProduct(product.id)}>Verwijder product</button>
        </div>
      );
    });
  }
}
