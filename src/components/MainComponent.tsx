import React from "react";
import HomeComponent from "./HomeComponent";
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ShoppingCartComponent from './ShoppingCartComponent';
import { IProduct } from "../shared/IProduct";
import { fetchProducts } from "../shared/fetchProducts";

interface IMainComponentProps {
    
}

interface IMainComponentState {
    products: IProduct[];
}

export default class MainComponent extends React.Component<IMainComponentProps, IMainComponentState> {
    constructor(props: IMainComponentProps) {
        super(props)
        
        this.state = {
            products: []
        }
    }

    // als het component geladen word voer getData uit 
    componentDidMount() {
        this.getData();
    }

    // haal data binnen met fetchproducts en zet het in de this.state 
    // method gemaakt zet products data in getData 
    async getData() {
        let data = await fetchProducts();

        this.setState({ products: data });        
    }

    render() {
        return (
            <div>
                <h1>MainComponent</h1>
                <HomeComponent products={this.state.products}/>
            </div>
        );
    }
}