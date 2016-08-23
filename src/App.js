import React, { Component } from 'react';
import UML from './src.uml';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a className="App-docs" target="about:blank" href={'http://plantuml.com/PlantUML_Language_Reference_Guide.pdf'}>docs</a> 
        <UML/>
      </div>
    );
  }
}

export default App;
