import React from "react";

interface IMainComponentProps {
    products: {}[]
}

export default class MainComponent extends React.Component<IMainComponentProps> {
    constructor(props: IMainComponentProps) {
        super(props)
    }

    render() {
        return(
            <div></div>
        );
    }
}