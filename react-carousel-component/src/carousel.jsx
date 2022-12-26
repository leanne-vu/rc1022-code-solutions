import React from 'react';

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, counter: 0 };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
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
              <img src={pics.picture}></img>
              <i onClick={this.handleRightClick} className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="row">
              <i className="fa-solid fa-circle"></i>
              <i className="fa-regular fa-circle"></i>
              <i className="fa-regular fa-circle"></i>
              <i className="fa-regular fa-circle"></i>
              <i className="fa-regular fa-circle"></i>
            </div>
          </div>
        );
      } else return (null);

    });
    return (pics);
  }
}
