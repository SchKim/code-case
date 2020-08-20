import React from "react";

interface IShoppingCartComponentProps {
   
}

export default class ShoppingCartComponent extends React.Component<IShoppingCartComponentProps> {
    constructor(props: IShoppingCartComponentProps) {
        super(props)
    }

    render() {
        return(
            <h1>ShoppingCartComponent</h1>
        );
    }
}