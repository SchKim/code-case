import React from "react";

interface IProductComponentProps {
   
}

export default class ProductComponent extends React.Component<IProductComponentProps> {
    constructor(props: IProductComponentProps) {
        super(props)
    }

    render() {
        return(
            <div><p>in product Component</p></div>
        );
    }
}