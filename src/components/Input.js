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
  }

  changeGuideText(new_inp) {
    if (new_inp.length == 1) {
      this.setState({
        startTime: Date.now()
      });
    }
    this.setState({
      inp: new_inp
    });

    const elapsedTimeMinutes = (Date.now() - this.state.startTime) / 60000
    this.props.calculateWPM(new_inp, elapsedTimeMinutes);
  }

  getGuideText() {
    const originalGuideText = 'nigger'.repeat(11)
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

  render() {
    return (
      <a>
        <form>
          <input
            type='text'
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