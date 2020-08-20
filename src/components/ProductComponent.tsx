import React from "react";
import { IProduct } from "../shared/IProduct";

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
                <img src="../logo svg" />
                <h1>TITle</h1>
                <p>disctriotion </p>
                <p>Price</p>

                <button>voeg toe aan mandje</button>
            </div>

            
        );
    }
}