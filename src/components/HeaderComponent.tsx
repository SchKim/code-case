import React from "react";

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
        <p>totaal producten: {this.props.totalProducts}</p>
        <p>totaal prijs: {this.props.totalPrice}</p>
        {/* bij onClick wort het winkelmand geleegd */}
        <button onClick={this.props.emptySelectedProducts}>Winkelmand legen</button>
      </div>
    );
  }
}
