import React from "react";
import HomeComponent from "./HomeComponent";

interface IMainComponentProps {
    
}

export default class MainComponent extends React.Component<IMainComponentProps> {
    constructor(props: IMainComponentProps) {
        super(props)
    }

    render() {
        return(
            <div>
                <HomeComponent/>
            </div>
        );
    }
}