import React, { Component } from 'react';

import './App.css';

//components 
import Mix from './components/mix';
import Stupid from './components/stupid';
import Toppair from './components/toppair';
import Bottompair from './components/bottompair';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Fold Pre </h1>
          
        </header>
        <p className="App-intro">
         <Mix />
         <Toppair />
         <Bottompair />
         <Stupid />
        </p>
      </div>
    );
  }
}

export default App;
