import React from "react";

interface IHeaderComponentProps {
   
}

export default class HeaderComponent extends React.Component<IHeaderComponentProps> {
    constructor(props: IHeaderComponentProps) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>HeaderComponent</h1>
                <p>icon</p>
                <p>5</p>
            </div>
        );
    }
}