import React, { Component } from 'react';
import UML from './src.uml';
import SVGInline from 'react-svg-inline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a className="App-docs" target="about:blank" href={'http://plantuml.com/PlantUML_Language_Reference_Guide.pdf'}>docs</a> 
        <SVGInline svg={UML} />
      </div>
    );
  }
}

export default App;
