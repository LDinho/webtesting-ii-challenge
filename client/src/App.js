import React, { Component } from 'react';
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

class App extends Component {

  render() {

    return (

      <main className="main-display">
        <Dashboard />
        <Display />
      </main>
    );
  }

}

export default App;
