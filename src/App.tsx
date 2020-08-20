import React from 'react';
import MainComponent from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (      
        <BrowserRouter>
          <div className="App">
            <MainComponent />
          </div>
       </BrowserRouter>      
    );
  }
}