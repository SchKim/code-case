import React from "react";
import { IProduct } from "../shared/IProduct";
import ProductComponent from "./ProductComponent";

interface IHomeComponentProps {
    products: IProduct[]
}

export default class HomeComponent extends React.Component<IHomeComponentProps> {
    constructor(props: IHomeComponentProps) {
        super(props)
    }

    render() {  
        return(
            <div>
                <h1>HomeComponent</h1>
                {this.renderProducts()}               
            </div>
        );
    }
    // dit is de For loop 
    renderProducts() {
        return this.props.products.map(product => {
            return <ProductComponent key={product.id} product={product} />
        });
    }
}