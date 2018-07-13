import React, { Component } from 'react';

import styles from './App.scss';

import Scanner from './Scanner';

class App extends Component
{
  render()
  {
    return (
      <main>
        <Scanner title="Police Scanner" coordinates={{ lat: 86.789, lng: -0.759 }} nearestMonth="2018-07" />
      </main>
    );
  }
}

export default App;
