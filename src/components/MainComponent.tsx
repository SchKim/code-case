import React from "react";
import HomeComponent from "./HomeComponent";
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ShoppingCartComponent from './ShoppingCartComponent';
import { IProduct } from "../shared/IProduct";
import { fetchProducts } from "../shared/fetchProducts";
import { Route } from "react-router-dom";

interface IMainComponentProps {
    
}

interface IMainComponentState {
    products: IProduct[];
    selectedProducts: IProduct[];
}

export default class MainComponent extends React.Component<IMainComponentProps, IMainComponentState> {
    constructor(props: IMainComponentProps) {
        super(props)
        
        this.state = {
            products: [],
            selectedProducts: []
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

    getTotalPrice() {
        let totalPrice: number = 0;

        this.state.selectedProducts.map(product => {
            totalPrice = totalPrice + product.price;
        });

        return totalPrice;
    }

    // anders bind(this)
    clickHandler = (product: IProduct) => {
        this.setState({ selectedProducts: [...this.state.selectedProducts, product] });
    }
    // de state gaat omlaag van main -> home -> product 
    // de onClick event gaat omhoog van product -> home -> main
    // zodat de state alleen in MainComponent bestaat of bijhouden
    // makkelijker om het door geven naar andere componenten zoals winkelwagen
    render() {
        return (
            <div>
                <h1>MainComponent</h1>
                <HeaderComponent totalProducts={this.state.selectedProducts.length} totalPrice={this.getTotalPrice()} />
                <Route exact path="/" component={() => <HomeComponent products={this.state.products} clickHandler={this.clickHandler}/>} />
                <Route path="/shoppingcart" component={() => <ShoppingCartComponent basket={this.state.selectedProducts} />} />                
            </div>
        );
    }
}