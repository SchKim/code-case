import React from "react";
import { IProduct } from "../shared/IProduct";
import { baseUrl } from '../shared/baseUrl'; 

interface IProductComponentProps {

    product: IProduct;
   
}


export default class ProductComponent extends React.Component<IProductComponentProps> {
    constructor(props: IProductComponentProps) {
        super(props);
        this.state = {
            id: '',
            title: '',
            price: '',
            description: '',
            category: '',
            image: ''
            
        }
        
    }
    render() {
        return(
            <div>
                <img src={ this.props.product.image} alt={this.props.product.title} />
                <h1>{this.props.product.title}</h1>
                <p>{this.props.product.description} </p>
                <p>{this.props.product.price}</p>

                <button>voeg toe aan mandje</button>
            </div>

            
        );
    }
}