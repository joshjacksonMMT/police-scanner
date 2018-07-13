import React from 'react';

import styles from './Scanner.scss';

class Scanner extends React.Component
{
  date = "2018-05";

  render() 
  {
    const { title, coordinates, nearestMonth } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>({coordinates.lat}, {coordinates.lng})</h2>
        <h3>{this.date}</h3>
      </div>
    );
  }
}

export default Scanner;
