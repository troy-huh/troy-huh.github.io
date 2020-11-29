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
      WPM: 0,
      easterEgg: false
    }
  }

  calculateWPM(easterEgg, inp, time) {
    if (easterEgg) {
      this.setState({
        easterEgg: true
      })
    }
    const correct = this.state.easterEgg ? 'kaleb'.repeat(13) : 'nigger'.repeat(11);
    let total = this.state.easterEgg ? inp.length / 5 : inp.length / 6;
    for (let i = 0; i < inp.length; i++) {
      if (inp.charAt(i) != correct.charAt(i)) {
        total -= this.state.easterEgg ? 1 / 5 : 1 / 6;
      }
    }

    this.setState({
      WPM: total / time
    });
  }

  render() {
    return (
      <div>
        <WPM WPM={this.state.WPM} easterEgg={this.state.easterEgg} />
        <Input calculateWPM={(easterEgg, inp, time) => this.calculateWPM(easterEgg, inp, time)}/>
      </div>
    );
  }
}

export default App;
