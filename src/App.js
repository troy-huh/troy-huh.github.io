import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import './App.css';

import Input from './components/Input';
import WPM from './components/WPM';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.calculateWPM = this.calculateWPM.bind(this);

    this.state = {
      WPM: 0
    }
  }

  calculateWPM(inp, time) {
    const correct = 'nigger'.repeat(11);
    let total = inp.length / 6;
    for (let i = 0; i < inp.length; i++) {
      if (inp.charAt(i) != correct.charAt(i)) {
        total -= 1 / 6;
      }
    }

    this.setState({
      WPM: total / time
    });
  }

  render() {
    return (
      <div>
        <WPM WPM={this.state.WPM} />
        <Input calculateWPM={(inp, time) => this.calculateWPM(inp, time)}/>
      </div>
    );
  }
}

export default App;
