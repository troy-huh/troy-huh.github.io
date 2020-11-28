import React from 'react';

import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inp: '',
      startTime: 0
    };

    this.changeGuideText = this.changeGuideText.bind(this);
    this.getGuideText = this.getGuideText.bind(this);
    this.getInpText = this.getInpText.bind(this);
  }

  changeGuideText(new_inp) {
    this.setState({
      inp: new_inp.length <= 65 ? new_inp : ''
    });
    if (this.state.inp.length == 1) {
      this.setState({
        startTime: Date.now()
      });
    }

    const elapsedTimeMinutes = (Date.now() - this.state.startTime) / 60000;
    this.props.calculateWPM(this.state.inp, elapsedTimeMinutes);
  }

  getGuideText() {
    const originalGuideText = 'nigger'.repeat(11);
    return (
      <div id='wrapper'>
        {originalGuideText.slice(0, this.state.inp.length).split('').map((s, i) => {
          return <span style={{ color: this.state.inp.charAt(i) == s ? 'green' : 'red' }} id='wrapItem'>{`${s}`}</span>
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
