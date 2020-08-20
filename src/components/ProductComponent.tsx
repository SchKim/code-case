import React from "react";
import { IProduct } from "../shared/IProduct";

interface IProductComponentProps {
    product: IProduct;
    clickHandler: (productId: number) => void   
}


export default class ProductComponent extends React.Component<IProductComponentProps> {
    constructor(props: IProductComponentProps) {
        super(props);        
    }    

    render() {
        return(
            <div>
                <img src={ this.props.product.image} alt={this.props.product.title} />
                <h1>{this.props.product.title}</h1>
                <p>{this.props.product.description} </p>
                <p>{this.props.product.price}</p>

                <button onClick={() => this.props.clickHandler(this.props.product.id)}>voeg toe aan mandje</button>
            </div>

            
        );
    }
}