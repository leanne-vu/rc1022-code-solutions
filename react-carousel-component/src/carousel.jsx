import React from 'react';

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, counter: 0 };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.setInterval1 = this.setInterval1.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  startInterval() {
    this.intervalId = setInterval(() => { this.tick(); }, 3000);
  }

  setInterval1() {
    this.setInterval1(this.startInterval);
  }

  handleLeftClick(event) {
    if (this.state.counter < 1) {
      this.setState({ counter: 4 });
    } else { this.setState({ counter: this.state.counter - 1 }); }
  }

  handleRightClick(event) {
    if (this.state.counter > 3) {
      this.setState({ counter: 0 });
    } else { this.setState({ counter: this.state.counter + 1 }); }
  }

  render() {
    const array = this.props.images;
    const pics = array.map((pics, index) => {
      if (this.state.counter === index) {
        return (
          <div key={pics.picture[index]} className="container">
            <div className="row">
              <i onClick={this.handleLeftClick} className="fa-solid fa-chevron-left"></i>
              <img onLoad={() => { this.setInterval1(); this.startInterval(); }} src={pics.picture}></img>
              <i onClick={this.handleRightClick} className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        );
      } else return (null);

    });
    const bubbles = this.props.bubbles;
    const bub = bubbles.map((circle, index) => {
      if (this.state.counter === index) {
        return (<i key={circle.key} className='fa-solid fa-circle'></i>);
      } else {
        return (<i key={circle.key} className='fa-regular fa-circle'></i>);
      }
    });
    return [pics, bub];

  }

}
