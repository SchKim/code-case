import React from "react";
//import products from '../shared/products'
// import { baseUrl } from "../shared/baseUrl";

interface IHomeComponentProps {
    // products: {}[]
}

export default class HomeComponent extends React.Component<IHomeComponentProps> {
    constructor(props: IHomeComponentProps) {
        super(props)
    }

    render() {
        return(
            <div>
                <p>HomeComponent</p>
            </div>
        );
    }
}