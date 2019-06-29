import React, { Component } from 'react';
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

class App extends Component {

  state = {
    balls: 0,
    strikes: 0
  };

  updateStat = type => {
    let value = this.state[type];

    console.log('works');

    switch (type) {
      case "balls":
        if (this.state.balls < 4) {
          value++
        }
        break;
      case "strikes":
        if (this.state.strikes < 3) value++;
        break;
      default:
        value++;
    }

    this.setState({ [type]: value });

  };

  render() {

    return (

      <main className="main-display">
        <Dashboard updateStat={this.updateStat} />
        <Display {...this.state} />
      </main>
    );
  }

}

export default App;
