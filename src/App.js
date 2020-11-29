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
      guideWord: 'nigger'
    }
  }

  calculateWPM(guideWord, inp, time) {
    this.setState({
      guideWord: guideWord
    })
    const guideWordLength = this.state.guideWord.length

    const correct = this.state.guideWord.repeat(13)
    let total = inp.length / guideWordLength
    for (let i = 0; i < inp.length; i++) {
      if (inp.charAt(i) != correct.charAt(i)) {
        total -= 1 / guideWordLength
      }
    }

    this.setState({
      WPM: total / time
    });
  }

  render() {
    return (
      <div>
        <WPM WPM={this.state.WPM} guideWord={this.state.guideWord} />
        <Input calculateWPM={(guideWord, inp, time) => this.calculateWPM(guideWord, inp, time)}/>
      </div>
    );
  }
}

export default App;
