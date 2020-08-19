import React from "react";
import HomeComponent from "./HomeComponent";
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ShoppingCartComponent from './ShoppingCartComponent';
import ProductComponent from '../components/ProductComponent';



interface IMainComponentProps {
    
}

export default class MainComponent extends React.Component<IMainComponentProps> {
    constructor(props: IMainComponentProps) {
        super(props)
    }

    render() {
        return(
            <div>
                <ProductComponent/>
                <HomeComponent/>
            </div>
        );
    }
}