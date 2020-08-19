import React from "react";
//import products from '../shared/products'

interface IHomeComponentProps {
    products: {}[]
}

export default class HomeComponent extends React.Component<IHomeComponentProps> {
    constructor(props: IHomeComponentProps) {
        super(props)
    }

    render() {
        return(
            <div></div>
        );
    }
}