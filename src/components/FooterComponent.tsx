import React from "react";

interface IFooterComponentProps {
   
}

export default class FooterComponent extends React.Component<IFooterComponentProps> {
    constructor(props: IFooterComponentProps) {
        super(props)
    }

    render() {
        return(
            <h1>FooterComponent</h1>
        );
    }
}