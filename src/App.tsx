import React from 'react';
import MainComponent from "./components/MainComponent";
import "./App.css";


export default class App extends React.Component {
  render() {
    return (      
          <div className="App">
            <MainComponent />
          </div>
    );
  }
}