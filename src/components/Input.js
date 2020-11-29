import React from 'react';

import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    const possibleGuideWords = ['nigger', 'kaleb', 'max', 'arveen', 'joon', 'brian']
    this.state = {
      possibleGuideWords: possibleGuideWords,
      possibleEasterEggTriggers: possibleGuideWords.map(e => e.slice(0, e.length - 1)),
      inp: '',
      startTime: 0,
      guideWord: 'nigger'
    };

    this.changeGuideText = this.changeGuideText.bind(this);
    this.getGuideText = this.getGuideText.bind(this);
    this.getInpText = this.getInpText.bind(this);
    this.escEvent = this.escEvent.bind(this);
  }

  escEvent(event) {
    if (event.keyCode === 27) {
      this.setState({
        inp: ''
      });
    }
    this.props.calculateWPM(this.state.guideWord, this.state.inp, 1);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escEvent, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escEvent, false);
  }

  changeGuideText(new_inp) {
    this.setState({
      inp: (new_inp.length < 66 - (66 % this.state.guideWord.length)) ? new_inp : ''
    });
    if (this.state.inp.length === 0 || this.state.inp.length === 1) {
      this.setState({
        startTime: Date.now(),
        easterEgg: ''
      });
    }
    if (this.state.possibleEasterEggTriggers.includes(this.state.inp)) {
      this.setState({
        guideWord: this.state.possibleGuideWords[this.state.possibleEasterEggTriggers.indexOf(this.state.inp)]
      });
    }

    const elapsedTimeMinutes = (Date.now() - this.state.startTime) / 60000;
    this.props.calculateWPM(this.state.guideWord, this.state.inp, elapsedTimeMinutes);
  }

  getGuideText() {
    const originalGuideText = this.state.guideWord.repeat(Math.round(66 / this.state.guideWord.length))
    return (
      <div id='wrapper'>
        {originalGuideText.slice(0, this.state.inp.length).split('').map((s, i) => {
          return <span style={{ color: this.state.inp.charAt(i) === s ? 'green' : 'red' }} id='wrapItem'>{`${s}`}</span>
        })}
        {originalGuideText.slice(this.state.inp.length).split('').map(s => {
          return <span style={{ color: 'black' }} id='wrapItem'>{`${s}`}</span>
        })}
      </div>
    );
  }

  getInpText() {
    return this.state.inp;
  }

  render() {
    return (
      <a>
        <form>
          <input
            type='text'
            value={this.getInpText()}
            className='question'
            onChange={e => this.changeGuideText(e.target.value)} />
          <label for='nme'>
            <span>{this.getGuideText()}</span>
          </label>
        </form>
      </a>
    );
  }
}

export default Input;
