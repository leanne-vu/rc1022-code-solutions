import React from 'react';

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false, number: 0 };
    this.intervalId = 0;
    this.startInterval = this.startInterval.bind(this);
    this.tick = this.tick.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
    this.setInterval1 = this.setInterval1.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  tick() {
    this.setState({ number: this.state.number + 1 });
  }

  startInterval() {
    this.intervalId = setInterval(() => { this.tick(); }, 1000);
  }

  setInterval1() {
    this.setInterval1(this.startInterval);
  }

  stopInterval() {
    this.stopInterval(clearInterval(this.intervalId));
  }

  resetWatch() {
    this.setState({ number: 0 });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <span className="circle">
            <span className="number">{this.state.number}</span>
          </span>
          <div>
            <i onClick={() => { this.handleClick(); this.stopInterval(); }} className="fa-solid fa-pause"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <span className="circle">
            <span onClick={this.resetWatch} className="number">{this.state.number}</span>
          </span>
          <div>
            <i onClick={() => { this.handleClick(); this.startInterval(); this.setInterval1(); }} className="fa-solid fa-play"></i>
          </div>
        </div>
      );
    }
  }
}
