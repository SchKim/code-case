import React from "react";

interface IHeaderComponentProps {
  totalProducts: number;
  totalPrice: number;
}

export default class HeaderComponent extends React.Component<
  IHeaderComponentProps
> {
  constructor(props: IHeaderComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>HeaderComponent</h1>
        <p>icon</p>
        <p>{this.props.totalProducts}</p>
        <p>totaal{this.props.totalPrice}</p>
      </div>
    );
  }
}
