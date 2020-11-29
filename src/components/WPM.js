import React from 'react';
import './WPM.css';

class WPM extends React.Component {
  render() {
    return (
      <h1 className='WPM' id='wrapper'>
        <a style={{ color: this.props.WPM > 150 ? 'green' : 'red'}} id='left'>{Math.round(this.props.WPM)}</a>
        <a id='right'> {this.props.easterEgg ? 'KPM' : 'NPM'}</a>
      </h1>
    );
  }
}

export default WPM;
