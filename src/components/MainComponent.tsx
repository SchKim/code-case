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

    // anders bind(this)
    clickHandler = (productId: number) => {
        console.log('this clickHandler is from MainComponent')
        console.log(productId)
    }
    // de state gaat omlaag van main -> home -> product 
    // de onClick event gaat omhoog van product -> home -> main
    // zodat de state alleen in MainComponent bestaat of bijhouden
    // makkelijker om het door geven naar andere componenten zoals winkelwagen
    render() {
        return (
            <div>
                <h1>MainComponent</h1>
                <HeaderComponent />
                <HomeComponent products={this.state.products} clickHandler={this.clickHandler}/>
            </div>
        );
    }
}