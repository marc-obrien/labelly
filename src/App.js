import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
          
         
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;