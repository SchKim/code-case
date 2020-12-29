import React from "react";
import { IProduct } from "../shared/IProduct";
import ProductComponent from "./ProductComponent";

interface IHomeComponentProps {
    products: IProduct[]
    clickHandler: (product: IProduct) => void   
}


export default function HomeComponent(props: IHomeComponentProps){
// dit is de For loop 
    const renderProducts = () => {
        // alleen de eerste 10 producten tonen
        const products = props.products.slice(0, 10);

        return products.map((product) => {
            return <ProductComponent key={product.id} product={product} clickHandler={props.clickHandler} />
        });
    }    

    return(
        <div>
            {renderProducts()}               
        </div>
    );
}



// export default class HomeComponent extends React.Component<IHomeComponentProps> {
//     render() {  
//         return(
//             <div>
//                 {this.renderProducts()}               
//             </div>
//         );
//     }
    
//     // dit is de For loop 
//     renderProducts() {
//         // alleen de eerste 10 producten tonen
//         const products = this.props.products.slice(0, 10);

//         return products.map((product) => {
//             return <ProductComponent key={product.id} product={product} clickHandler={this.props.clickHandler} />
//         });
//     }    
// }